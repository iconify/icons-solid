import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnpxsobiw.css';
import '../../css/k/kcuxivbtz.css';
import '../../css/e/euz_oobjm.css';
import '../../css/g/g635ytb0c.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/d/dp_ca5s_r.css';
import '../../css/l/l_lw-p_bo.css';
import '../../css/p/pnd94hq3w.css';
import '../../css/k/k0bboa57p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fnpxsobiw"/><path class="kcuxivbtz"/><path class="euz_oobjm"/><circle class="g635ytb0c"/><g class="rpvb-o6bq"><path class="dp_ca5s_r"/><path class="l_lw-p_bo"/><path class="pnd94hq3w"/><circle class="k0bboa57p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shorts"} {...others} />);
}

export default Component;
