import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a6bdxlbfp.css';
import '../../css/g/gawr9cban.css';
import '../../css/z/zzgumwbxx.css';
import '../../css/a/acmuaibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a6bdxlbfp wm-k"/><path class="gawr9cban wm-shadow"/><path class="wm-k zzgumwbxx"/><path class="acmuaibfy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-charging-engrave"} {...others} />);
}

export default Component;
