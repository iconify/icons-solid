import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjma1yhgw.css';
import '../../css/o/o56886fcb.css';
import '../../css/y/yi3jdwbhm.css';
import '../../css/h/hje3l258t.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/w/wl0nxwozv.css';
import '../../css/t/tf-69zb1j.css';
import '../../css/w/wsyb6e2br.css';
import '../../css/m/mhuxuabbj.css';
import '../../css/x/xxpj55bkt.css';
import '../../css/t/t9yqnsb5s.css';
import '../../css/l/l0xvyxbbz.css';
import '../../css/o/o--ak2bpo.css';
import '../../css/a/av_if2vco.css';
import '../../css/e/epfw58axf.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="yjma1yhgw"/><path class="o56886fcb"/><path class="yi3jdwbhm"/><path class="hje3l258t"/><g class="hzhb0bcwn"><circle class="wl0nxwozv"/><path class="tf-69zb1j"/><circle class="wsyb6e2br"/><circle class="mhuxuabbj"/><circle class="xxpj55bkt"/><circle class="t9yqnsb5s"/><circle class="l0xvyxbbz"/><path class="o--ak2bpo"/><circle class="av_if2vco"/><path class="epfw58axf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:no-littering"} {...others} />);
}

export default Component;
