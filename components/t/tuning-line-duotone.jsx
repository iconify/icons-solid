import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q77o3mbpt.css';
import '../../css/b/b05_rogij.css';
import '../../css/p/prgepsqtv.css';
import '../../css/v/vmeo6lkhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q77o3mbpt"/><path class="b05_rogij"/><path class="prgepsqtv"/><path class="vmeo6lkhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-line-duotone"} {...others} />);
}

export default Component;
