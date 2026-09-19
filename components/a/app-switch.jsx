import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lv-93fbrx.css';
import '../../css/j/jss8cmb6j.css';
import '../../css/e/e5nawumwm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lv-93fbrx"/><path class="jss8cmb6j"/><path class="e5nawumwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:app-switch"} {...others} />);
}

export default Component;
