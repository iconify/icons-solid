import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8ey5rnuq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a8ey5rnuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:boot-volume"} {...others} />);
}

export default Component;
