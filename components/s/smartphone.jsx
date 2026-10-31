import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hlhg6ac2r.css';
import '../../css/z/zzudomejr.css';
import '../../css/o/owyws4bla.css';
import '../../css/r/rruficcbx.css';
import '../../css/i/ifnqhqbgb.css';
import '../../css/r/rn3llub_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hlhg6ac2r wm-shadow"/><path class="zzudomejr"/><path class="owyws4bla"/><path class="rruficcbx"/><path class="ifnqhqbgb"/><path class="rn3llub_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:smartphone"} {...others} />);
}

export default Component;
