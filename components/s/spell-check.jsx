import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvpgq7bzi.css';
import '../../css/p/pe5rkxbmh.css';
import '../../css/g/goyezybag.css';
import '../../css/k/kxvnn4b5f.css';
import '../../css/m/moo3vwbou.css';
import '../../css/h/hpzh0webn.css';
import '../../css/k/k7dj94b8z.css';
import '../../css/j/jto_x7bpw.css';
import '../../css/o/opa_eibnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zvpgq7bzi"/><path class="pe5rkxbmh wm-k"/><path class="goyezybag wm-k"/><path class="kxvnn4b5f wm-a"/><path class="moo3vwbou wm-a"/><path class="hpzh0webn wm-a"/><path class="k7dj94b8z wm-s"/><path class="jto_x7bpw wm-s"/><path class="opa_eibnn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:spell-check"} {...others} />);
}

export default Component;
