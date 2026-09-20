import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z8qpob2lz.css';
import '../../css/s/sxsqxibve.css';
import '../../css/i/iir_s_ykv.css';
import '../../css/l/l-48cgbbs.css';
import '../../css/q/qxe-cdcss.css';
import '../../css/i/i5_aqn80p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z8qpob2lz"/><path class="sxsqxibve"/><path class="iir_s_ykv"/><path class="l-48cgbbs"/><path class="qxe-cdcss"/><path class="i5_aqn80p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-orientation-line-duotone"} {...others} />);
}

export default Component;
