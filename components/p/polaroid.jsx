import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/db46l5ora.css';
import '../../css/m/mjefmob2g.css';
import '../../css/n/nlhwnpaiw.css';
import '../../css/m/msw4ye96b.css';
import '../../css/j/jdm355aji.css';
import '../../css/e/es5dsrurk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="db46l5ora"/><path class="mjefmob2g"/><path class="nlhwnpaiw"/><path class="msw4ye96b"/><path class="jdm355aji"/><path class="es5dsrurk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:polaroid"} {...others} />);
}

export default Component;
