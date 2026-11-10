import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfyy1z9jr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfyy1z9jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stroke-line-cap-butt"} {...others} />);
}

export default Component;
