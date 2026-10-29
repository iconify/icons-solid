import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0ayj_o2h.css';
import '../../css/p/pz8p31mak.css';
import '../../css/e/etg2oubsd.css';
import '../../css/m/mvhlf4blz.css';
import '../../css/k/krv5lg8ym.css';
import '../../css/x/x441n-bjr.css';
import '../../css/t/trez0cbgx.css';
import '../../css/a/arvjwdbga.css';
import '../../css/f/f68ilzb1h.css';
import '../../css/x/x7piyg0of.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a0ayj_o2h wm-shadow"/><path class="pz8p31mak wm-shadow"/><path class="etg2oubsd"/><path class="mvhlf4blz"/><path class="krv5lg8ym"/><path class="wm-shine x441n-bjr"/><path class="trez0cbgx wm-shine"/><path class="arvjwdbga"/><path class="f68ilzb1h"/><path class="x7piyg0of"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:gem"} {...others} />);
}

export default Component;
