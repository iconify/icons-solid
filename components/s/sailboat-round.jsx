import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm2m2btlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm2m2btlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sailboat-round"} {...others} />);
}

export default Component;
