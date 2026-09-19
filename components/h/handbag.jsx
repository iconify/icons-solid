import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wm942dgda.css';
import '../../css/l/l9og8mbwg.css';
import '../../css/c/cnfz1eblz.css';
import '../../css/t/tbtj4gjka.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wm942dgda"/><path class="l9og8mbwg"/><path class="cnfz1eblz"/><path class="tbtj4gjka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:handbag"} {...others} />);
}

export default Component;
