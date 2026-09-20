import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/q-m41w_kv.css';
import '../../css/l/l7io8sbbr.css';
import '../../css/m/meiqav1nl.css';
import '../../css/t/taj4ylugj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="q-m41w_kv"/><path class="l7io8sbbr"/><path class="meiqav1nl"/><path class="taj4ylugj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-horizont"} {...others} />);
}

export default Component;
