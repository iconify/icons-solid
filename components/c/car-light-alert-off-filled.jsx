import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/g/glyvbs.css';
import '../../css/t/taf2xz.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/g/g7271p.css';
import '../../css/h/hh6w2l.css';
import '../../css/y/y-onct.css';
import '../../css/q/qc_pkd.css';
import '../../css/q/qe59mu.css';
import '../../css/u/uv8ddv.css';
import '../../css/o/oss4_x.css';
import '../../css/p/plzspp.css';
import '../../css/z/z8slok.css';
import '../../css/b/botfzx.css';
import '../../css/j/jy7vld.css';
import '../../css/s/s8e22g.css';
import '../../css/l/lz7_an.css';
import '../../css/r/rd8w4d.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGT6Nx2Wci"><path class="g_1xrq glyvbs taf2xz y4wbml zxndow"/><path class="g7271p g_1xrq taf2xz y4wbml zxndow"/><path class="g_1xrq hh6w2l taf2xz y4wbml zxndow"/><path class="g_1xrq taf2xz y-onct y4wbml zxndow"/><path class="g_1xrq qc_pkd qe59mu uv8ddv"/><path class="g_1xrq oss4_x qe59mu taf2xz zxndow"/><path class="g_1xrq plzspp qc_pkd taf2xz y4wbml z8slok"/></mask></defs><path mask="url(#SVGT6Nx2Wci)" class="botfzx"/><path class="g_1xrq jy7vld plzspp s8e22g taf2xz y4wbml"/><path class="g_1xrq lz7_an s8e22g taf2xz y4wbml"/><path class="g_1xrq rd8w4d s8e22g taf2xz y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:car-light-alert-off-filled"} {...others} />);
}

export default Component;
