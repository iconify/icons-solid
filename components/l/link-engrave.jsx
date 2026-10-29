import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uk0viebcn.css';
import '../../css/q/qwoa4ibhw.css';
import '../../css/y/y3_5exb-s.css';
import '../../css/i/ih32s4bkl.css';
import '../../css/v/v1kfzlb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uk0viebcn wm-k"/><path class="qwoa4ibhw wm-a"/><path class="wm-shadow y3_5exb-s"/><path class="ih32s4bkl wm-k"/><path class="v1kfzlb7a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:link-engrave"} {...others} />);
}

export default Component;
