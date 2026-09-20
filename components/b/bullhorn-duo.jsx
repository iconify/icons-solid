import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytnngga1j.css';
import '../../css/u/u88t2hb4o.css';
import '../../css/a/amebg_b4b.css';
import '../../css/j/jm6nxkbua.css';
import '../../css/m/m-idh_brr.css';
import '../../css/h/h8pu4tmkr.css';
import '../../css/s/s4klev82m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ytnngga1j"/><path class="u88t2hb4o"/><path class="amebg_b4b"/><path class="jm6nxkbua"/><path class="m-idh_brr"/><path class="h8pu4tmkr"/><path class="s4klev82m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bullhorn-duo"} {...others} />);
}

export default Component;
