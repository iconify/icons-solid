import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/k/kqwq9psty.css';
import '../../css/k/ki1zkpbpv.css';
import '../../css/r/ret-yqrab.css';
import '../../css/h/hm8jusbdp.css';
import '../../css/k/k5-7xwbdu.css';
import '../../css/l/l-50gsn4r.css';
import '../../css/f/fmnb_uylf.css';
import '../../css/p/pgciajdyk.css';
import '../../css/j/jely4qz2a.css';
import '../../css/g/geib9z6_m.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="kqwq9psty"/><path class="ki1zkpbpv"/><circle class="ret-yqrab"/><path class="hm8jusbdp"/><ellipse class="k5-7xwbdu"/><ellipse class="l-50gsn4r"/><circle class="fmnb_uylf"/><path class="pgciajdyk"/><path class="jely4qz2a"/><path class="geib9z6_m"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-new-caledonia"} {...others} />);
}

export default Component;
