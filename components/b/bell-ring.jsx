import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gvc4-q3nz.css';
import '../../css/k/kc6h7sfrj.css';
import '../../css/a/aw-y4ebmh.css';
import '../../css/k/kateb-bmf.css';
import '../../css/w/w9t-1zb-m.css';
import '../../css/g/g71c4bbqi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="gvc4-q3nz"/><path class="kc6h7sfrj"/><path class="aw-y4ebmh"/><path class="kateb-bmf"/><circle class="w9t-1zb-m"/><path class="g71c4bbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bell-ring"} {...others} />);
}

export default Component;
