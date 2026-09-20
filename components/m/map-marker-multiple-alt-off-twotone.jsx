import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4icuc.css';
import '../../css/g/g26hbu.css';
import '../../css/g/g_1xrq.css';
import '../../css/t/taf2xz.css';
import '../../css/z/zxndow.css';
import '../../css/m/m1a5bt.css';
import '../../css/q/qc_pkd.css';
import '../../css/a/aotban.css';
import '../../css/s/s70b4t.css';
import '../../css/i/i8_pay.css';
import '../../css/n/nsraqz.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-h46djy.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG4y8LobCe"><path class="f4icuc g26hbu g_1xrq taf2xz zxndow"/><path class="g_1xrq m1a5bt qc_pkd"/><path class="aotban g26hbu g_1xrq taf2xz zxndow"/><circle class="g26hbu s70b4t"/><path class="g_1xrq i8_pay nsraqz qc_pkd taf2xz"/></mask></defs><path mask="url(#SVG4y8LobCe)" class="botfzx"/><path class="g_1xrq gd_4-q i8_pay taf2xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:map-marker-multiple-alt-off-twotone"} {...others} />);
}

export default Component;
