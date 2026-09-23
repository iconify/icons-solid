import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cdixm-bmx.css';
import '../../css/z/zr5m9kbwl.css';
import '../../css/z/zzqgx-_3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="cdixm-bmx"/><path class="zr5m9kbwl"/><path class="zzqgx-_3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
