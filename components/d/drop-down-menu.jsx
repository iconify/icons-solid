import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/m4ulaabnz.css';
import '../../css/q/qd4poz7eq.css';
import '../../css/z/zvxqg2b4f.css';
import '../../css/j/jmcdaq-am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="m4ulaabnz"/><path class="qd4poz7eq"/><path class="zvxqg2b4f"/><path class="jmcdaq-am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:drop-down-menu"} {...others} />);
}

export default Component;
