import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5mrnibft.css';
import '../../css/b/bymj2hrfw.css';
import '../../css/e/eyzxcod8u.css';
import '../../css/f/f_v3qwbfo.css';
import '../../css/t/tf3lzub4l.css';
import '../../css/s/ssgsu6bwo.css';
import '../../css/l/lxgvugbdm.css';
import '../../css/r/rw652k7oi.css';
import '../../css/w/wn4ofyaxi.css';
import '../../css/j/jxqi2jbpi.css';
import '../../css/r/rm5lbmyxt.css';
import '../../css/s/scze-y8qu.css';
import '../../css/k/k30cawb9f.css';
import '../../css/t/t-g-ryble.css';
import '../../css/n/nhadw2bjj.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="d5mrnibft"/><circle class="bymj2hrfw"/><path class="eyzxcod8u"/><path class="f_v3qwbfo"/><circle class="tf3lzub4l"/><circle class="ssgsu6bwo"/><circle class="lxgvugbdm"/><path class="rw652k7oi"/><path class="wn4ofyaxi"/><g class="jxqi2jbpi"><circle class="rm5lbmyxt"/><path class="scze-y8qu"/><path class="k30cawb9f"/><path class="t-g-ryble"/><path class="nhadw2bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shallow-pan-of-food"} {...others} />);
}

export default Component;
