import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/k/kqdha1b3q.css';
import '../../css/h/h5l2njb5d.css';
import '../../css/w/w32xgqt2h.css';
import '../../css/r/rxh4z3sxh.css';
import '../../css/e/ekh05c4_x.css';
import '../../css/b/b90oeih1o.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="kqdha1b3q"/><path clip-rule="evenodd" class="h5l2njb5d"/><path class="w32xgqt2h"/><path class="rxh4z3sxh"/><path class="ekh05c4_x"/><path clip-rule="evenodd" class="b90oeih1o"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:knive-fork-circle-filled"} {...others} />);
}

export default Component;
