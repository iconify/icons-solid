import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6xt707xs.css';
import '../../css/i/idlu6hbah.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j6xt707xs"/><path class="idlu6hbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:face-cool"} {...others} />);
}

export default Component;
