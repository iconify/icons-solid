import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qbtmnloys.css';
import '../../css/u/uou5db2ds.css';
import '../../css/g/g24ve3bsy.css';
import '../../css/y/yhq0nzurr.css';
import '../../css/h/ho9e7ilqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qbtmnloys"/><path class="uou5db2ds wm-k"/><path class="g24ve3bsy wm-s"/><path class="wm-k yhq0nzurr"/><path class="ho9e7ilqr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bluetooth-off-sketch"} {...others} />);
}

export default Component;
