import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/id40s-zgk.css';
import '../../css/m/m710_q-or.css';
import '../../css/a/a66psgbgv.css';
import '../../css/e/eebtdobhf.css';
import '../../css/q/qfi8fyb0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="id40s-zgk"/><path class="m710_q-or"/><path class="a66psgbgv"/><path class="eebtdobhf"/><path class="qfi8fyb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:afro-pick"} {...others} />);
}

export default Component;
