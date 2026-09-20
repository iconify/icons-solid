import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laa_wbbuw.css';
import '../../css/o/orf_rbcmo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="laa_wbbuw"/><path class="orf_rbcmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dashboard-gauge-1"} {...others} />);
}

export default Component;
