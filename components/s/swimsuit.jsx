import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hzfrecc0v.css';
import '../../css/e/eb3p7pb0t.css';
import '../../css/h/hjuiqbbkr.css';
import '../../css/a/avwy-abil.css';
import '../../css/r/roty61brl.css';
import '../../css/o/oxveeub8s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hzfrecc0v"/><path class="eb3p7pb0t"/><path class="hjuiqbbkr"/><circle class="avwy-abil"/><circle class="roty61brl"/><path class="oxveeub8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:swimsuit"} {...others} />);
}

export default Component;
