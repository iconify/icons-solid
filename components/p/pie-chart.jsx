import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poo1qvent.css';
import '../../css/v/vzsorcbjw.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/q6l61kbvl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="poo1qvent"/><path clip-rule="evenodd" class="vzsorcbjw"/><path class="xjfc-xbtr"/><path class="q6l61kbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pie-chart"} {...others} />);
}

export default Component;
