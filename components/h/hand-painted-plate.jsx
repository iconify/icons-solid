import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coazjbb-c.css';
import '../../css/i/ikt0omuzx.css';
import '../../css/q/qclquzb_v.css';
import '../../css/g/g6mgfwbjh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="coazjbb-c"/><path class="ikt0omuzx"/><rect class="qclquzb_v"/><rect class="g6mgfwbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hand-painted-plate"} {...others} />);
}

export default Component;
