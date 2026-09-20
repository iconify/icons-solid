import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwxe5qdht.css';
import '../../css/n/na50we7xl.css';
import '../../css/g/gvz57ybzm.css';
import '../../css/w/wflyzoglk.css';
import '../../css/u/u4b_lsbdg.css';
import '../../css/v/v4to0fn_i.css';
import '../../css/c/c85jbphap.css';
import '../../css/o/og2rrsbbr.css';
import '../../css/m/m2e0x0i8c.css';
import '../../css/r/r3dtfx6xo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vwxe5qdht"/><path class="na50we7xl"/><path class="gvz57ybzm"/><path class="wflyzoglk"/><path class="u4b_lsbdg"/><path class="v4to0fn_i"/><path class="c85jbphap"/><path class="og2rrsbbr"/><path class="m2e0x0i8c"/><path class="r3dtfx6xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-screaming-in-fear"} {...others} />);
}

export default Component;
