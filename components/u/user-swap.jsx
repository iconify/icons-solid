import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc622mbzm.css';
import '../../css/i/ijaqefuuu.css';
import '../../css/b/bp_1w6ehs.css';
import '../../css/e/efpnp7kky.css';
import '../../css/f/f4afft9_u.css';
import '../../css/j/j9819qbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qc622mbzm"/><path class="ijaqefuuu"/><path class="bp_1w6ehs"/><path class="efpnp7kky"/><path class="f4afft9_u"/><path class="j9819qbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-swap"} {...others} />);
}

export default Component;
