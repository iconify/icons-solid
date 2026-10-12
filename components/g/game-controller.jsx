import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg493ubka.css';
import '../../css/p/psaycfbjl.css';
import '../../css/l/l6xg3zbkp.css';
import '../../css/q/qaqq91tal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dg493ubka"/><path class="psaycfbjl"/><path class="l6xg3zbkp"/><path class="qaqq91tal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:game-controller"} {...others} />);
}

export default Component;
