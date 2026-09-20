import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zilnhst.css';
import '../../css/e/e92nyba0h.css';
import '../../css/w/w8p6qwx-n.css';
import '../../css/r/rpt60czch.css';
import '../../css/v/vf521x8fj.css';

const viewBox = {"width":45,"height":41};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2zilnhst"/><path class="e92nyba0h"/><path class="w8p6qwx-n"/><path class="rpt60czch"/><path class="vf521x8fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bento"} {...others} />);
}

export default Component;
