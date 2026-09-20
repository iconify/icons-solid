import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_1xrq.css';
import '../../css/m/m0rwxu.css';
import '../../css/t/taf2xz.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/b/br5pwd.css';
import '../../css/y/ysmgkm.css';
import '../../css/q/qc_pkd.css';
import '../../css/u/uv8ddv.css';
import '../../css/z/z_b1hb.css';
import '../../css/u/uyho1w.css';
import '../../css/u/ux4wzr.css';
import '../../css/z/z8slok.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNcdBSchN"><path class="g_1xrq m0rwxu taf2xz y4wbml zxndow"/><path class="br5pwd g_1xrq taf2xz y4wbml zxndow"/><path class="g_1xrq taf2xz y4wbml ysmgkm zxndow"/><path class="g_1xrq qc_pkd uv8ddv z_b1hb"/><path class="g_1xrq taf2xz uyho1w z_b1hb zxndow"/><path class="g_1xrq qc_pkd taf2xz ux4wzr y4wbml z8slok"/></mask></defs><path mask="url(#SVGNcdBSchN)" class="botfzx"/><path class="fo5bbb g_1xrq taf2xz ux4wzr y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:car-light-dimmed-off-filled"} {...others} />);
}

export default Component;
