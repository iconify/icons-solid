import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbi0r-y8h.css';
import '../../css/n/ne4t_uv8b.css';
import '../../css/g/geasmbcqt.css';
import '../../css/t/tgw_nb89p.css';
import '../../css/g/ggx3qtb-x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cbi0r-y8h"/><circle class="ne4t_uv8b"/><path class="geasmbcqt"/><path class="tgw_nb89p"/><path class="ggx3qtb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rightmagnifyingglass"} {...others} />);
}

export default Component;
