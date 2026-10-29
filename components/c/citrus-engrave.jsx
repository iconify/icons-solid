import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wj-_vp29w.css';
import '../../css/w/wrmxp3bja.css';
import '../../css/e/eug742r3l.css';
import '../../css/w/wabd8kb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wj-_vp29w wm-k"/><path class="wm-shadow wrmxp3bja"/><path class="eug742r3l wm-k"/><path class="wabd8kb8q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:citrus-engrave"} {...others} />);
}

export default Component;
