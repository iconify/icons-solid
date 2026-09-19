import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bi-0wkbso.css';
import '../../css/c/cyxc_lbvc.css';
import '../../css/i/ixr36dbus.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="bi-0wkbso"/><path class="cyxc_lbvc"/><path class="ixr36dbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thinking-problem"} {...others} />);
}

export default Component;
