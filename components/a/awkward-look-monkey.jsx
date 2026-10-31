import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uy12_gyor.css';
import '../../css/p/p_rhsoapd.css';
import '../../css/g/gos2osjbb.css';
import '../../css/k/kmfauybau.css';
import '../../css/s/somg_bkjp.css';
import '../../css/v/vibk5ob8f.css';
import '../../css/s/sgbmbwbqo.css';
import '../../css/a/a2j3s_b7k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uy12_gyor"/><path class="p_rhsoapd"/><path class="gos2osjbb"/><path class="kmfauybau"/><ellipse class="somg_bkjp"/><ellipse class="vibk5ob8f"/><path class="sgbmbwbqo"/><path clip-rule="evenodd" class="a2j3s_b7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:awkward-look-monkey"} {...others} />);
}

export default Component;
