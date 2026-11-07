import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_vz0301x.css';
import '../../css/z/ziyj3ibvq.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/cy-v-jjkp.css';
import '../../css/u/ucveffq8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_vz0301x"/><path class="ziyj3ibvq"/><g class="xtpeb-edw"><path class="cy-v-jjkp"/><path class="ucveffq8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-bold-duotone"} {...others} />);
}

export default Component;
