import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9wv9lbpl.css';
import '../../css/q/q1w_cm5gv.css';
import '../../css/v/v580zsb7y.css';
import '../../css/c/c513ujbog.css';
import '../../css/m/mwohvb_vx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r9wv9lbpl"/><path class="q1w_cm5gv"/><g class="v580zsb7y"><path class="c513ujbog"/><path class="mwohvb_vx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:global-learning-flat"} {...others} />);
}

export default Component;
