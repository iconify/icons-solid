import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1t8zqbdb.css';
import '../../css/z/zu4rk8cma.css';
import '../../css/u/u578j1b3d.css';
import '../../css/k/klr9pbcyq.css';
import '../../css/l/lehnazzkp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="m1t8zqbdb"/><path class="zu4rk8cma"/><path class="u578j1b3d"/><circle class="klr9pbcyq"/><circle class="lehnazzkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disk-two"} {...others} />);
}

export default Component;
