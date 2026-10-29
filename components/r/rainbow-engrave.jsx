import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sr8-7ybpu.css';
import '../../css/a/a88t_lbux.css';
import '../../css/r/r5b1awbki.css';
import '../../css/y/ydpucsi6v.css';
import '../../css/k/kgm9zh0zc.css';
import '../../css/w/wk7jmzmpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sr8-7ybpu wm-k"/><path class="a88t_lbux wm-a"/><path class="r5b1awbki wm-shadow"/><path class="wm-k ydpucsi6v"/><path class="kgm9zh0zc wm-k"/><path class="wk7jmzmpf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rainbow-engrave"} {...others} />);
}

export default Component;
