import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp1i03b6i.css';
import '../../css/q/qwoi0oksk.css';
import '../../css/c/cdwrhdcqt.css';
import '../../css/z/z9thu7bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dp1i03b6i"/><path class="qwoi0oksk"/><path class="cdwrhdcqt"/><path class="z9thu7bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:battery-charge"} {...others} />);
}

export default Component;
