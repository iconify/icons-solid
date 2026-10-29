import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/etzt8li8p.css';
import '../../css/l/lv9qmw66s.css';
import '../../css/q/q0mlcsbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="etzt8li8p wm-a"/><path class="lv9qmw66s wm-k"/><path class="q0mlcsbte wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-candlestick-sketch"} {...others} />);
}

export default Component;
