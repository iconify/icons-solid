import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/q/qvdify37g.css';
import '../../css/h/hb6-3bcix.css';
import '../../css/i/io58fh8oh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="qvdify37g"/><path class="hb6-3bcix"/><path class="io58fh8oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:parachute-drop"} {...others} />);
}

export default Component;
