import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzd2qnarn.css';
import '../../css/r/rpcuqth_z.css';
import '../../css/o/oofp69bmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zzd2qnarn"/><path class="rpcuqth_z"/><path class="oofp69bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-linear"} {...others} />);
}

export default Component;
