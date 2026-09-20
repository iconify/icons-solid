import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkaxou.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/l/li54_l.css';
import '../../css/y/y4wbml.css';
import '../../css/m/msg1oi.css';
import '../../css/q/qc_pkd.css';
import '../../css/g/gvj_ce.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-64.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGu0Gt3cKt"><path class="lkaxou t5pxry zxndow"/><path class="li54_l t5pxry y4wbml zxndow"/><path class="msg1oi qc_pkd t5pxry y4wbml"/><path class="gvj_ce qc_pkd t5pxry y4wbml"/></mask></defs><path mask="url(#SVGu0Gt3cKt)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:medical-services-filled"} {...others} />);
}

export default Component;
