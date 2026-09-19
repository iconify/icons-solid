import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvzxvjb4l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vvzxvjb4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:locked-and-blocked"} {...others} />);
}

export default Component;
