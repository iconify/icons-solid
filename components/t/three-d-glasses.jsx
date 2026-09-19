import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z3lx3r37r.css';
import '../../css/l/lgog-_bex.css';
import '../../css/k/k4leand_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="z3lx3r37r"/><path class="lgog-_bex"/><path clip-rule="evenodd" class="k4leand_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:three-d-glasses"} {...others} />);
}

export default Component;
