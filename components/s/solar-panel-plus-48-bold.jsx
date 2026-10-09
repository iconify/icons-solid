import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfzstzcwv.css';
import '../../css/o/o5ch5cb7c.css';
import '../../css/i/iw_u_sboj.css';
import '../../css/w/wuh-iacpi.css';
import '../../css/i/it04kcbvr.css';
import '../../css/g/gsyd5vmtp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rfzstzcwv"/><path class="o5ch5cb7c"/><path class="iw_u_sboj"/><path class="wuh-iacpi"/><path class="it04kcbvr"/><path class="gsyd5vmtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-plus-48-bold"} {...others} />);
}

export default Component;
