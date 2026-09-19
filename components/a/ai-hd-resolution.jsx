import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/imlg3t0iy.css';
import '../../css/w/wzfz2kbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="imlg3t0iy"/><path class="wzfz2kbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-hd-resolution"} {...others} />);
}

export default Component;
