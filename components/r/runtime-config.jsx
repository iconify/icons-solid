import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iicfjbcrf.css';
import '../../css/g/gue_jz8_o.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/u/ujnj-vbxv.css';
import '../../css/g/g_18j8ger.css';
import '../../css/q/qg2cbjbtc.css';
import '../../css/e/e_v7g-lpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iicfjbcrf"/><path class="gue_jz8_o"/><path class="i7sr6ubzr"/><path class="ujnj-vbxv"/><path class="g_18j8ger"/><path class="qg2cbjbtc"/><path class="e_v7g-lpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:runtime-config"} {...others} />);
}

export default Component;
