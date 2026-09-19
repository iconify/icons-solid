import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mwjqgf-_o.css';
import '../../css/f/fi_moqbpl.css';
import '../../css/i/ixc_y2y0f.css';
import '../../css/i/i7_ys9b1d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="mwjqgf-_o"/><path class="fi_moqbpl"/><circle class="ixc_y2y0f"/><path class="i7_ys9b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radio-one"} {...others} />);
}

export default Component;
