import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/m/m8fuxk.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/u/u50o9y.css';
import '../../css/y/yl47yi.css';
import '../../css/k/ka8tpa.css';
import '../../css/q/qc_pkd.css';
import '../../css/u/uv8ddv.css';
import '../../css/z/z_b1hb.css';
import '../../css/p/plzspp.css';
import '../../css/z/z8slok.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGgEszCc7t"><path class="g_1xrq m8fuxk yuzzkf zxndow"/><path class="g_1xrq u50o9y yuzzkf zxndow"/><path class="g_1xrq yl47yi yuzzkf zxndow"/><path class="g_1xrq ka8tpa yuzzkf zxndow"/><path class="g_1xrq qc_pkd uv8ddv z_b1hb"/><path class="ds6iuu g_1xrq yuzzkf z_b1hb zxndow"/><path class="g_1xrq plzspp qc_pkd yuzzkf z8slok"/></mask></defs><path mask="url(#SVGgEszCc7t)" class="botfzx"/><path class="fo5bbb g_1xrq plzspp yuzzkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:car-light-off"} {...others} />);
}

export default Component;
