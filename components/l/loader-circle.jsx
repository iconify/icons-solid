import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1r4hmp6l.css';
import '../../css/k/k6pnzwh_t.css';
import '../../css/u/udt1ccc5n.css';
import '../../css/m/mbmg2lwil.css';
import '../../css/k/kqpb6zbak.css';
import '../../css/y/y_ol0cb7v.css';
import '../../css/t/tcchf9zen.css';
import '../../css/y/yv_onkkbs.css';
import '../../css/t/to4g0ubev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow y1r4hmp6l"/><path class="k6pnzwh_t wm-shadow"/><path class="udt1ccc5n"/><path class="mbmg2lwil"/><path class="kqpb6zbak"/><path class="y_ol0cb7v"/><path class="tcchf9zen wm-shine"/><path class="wm-shine yv_onkkbs"/><path class="to4g0ubev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:loader-circle"} {...others} />);
}

export default Component;
