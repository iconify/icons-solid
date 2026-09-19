import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n_q1vmbzx.css';
import '../../css/f/f6uz80bop.css';
import '../../css/f/fek8ae9up.css';
import '../../css/f/fqkzc1bye.css';
import '../../css/c/cz8_hfb1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n_q1vmbzx"/><path class="f6uz80bop"/><path class="fek8ae9up"/><path class="fqkzc1bye"/><path class="cz8_hfb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:preview-close"} {...others} />);
}

export default Component;
