import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/ap_ux3bfg.css';
import '../../css/q/q9q8vsb3b.css';
import '../../css/d/dzkh45bdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ap_ux3bfg"/><path class="q9q8vsb3b"/><path class="dzkh45bdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:vpn-connection"} {...others} />);
}

export default Component;
