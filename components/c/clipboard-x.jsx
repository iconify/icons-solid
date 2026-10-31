import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/n/ntffncbfp.css';
import '../../css/y/y0x7avbpd.css';
import '../../css/w/w4e4tsbdn.css';
import '../../css/v/vde11bcyd.css';
import '../../css/y/yxsht_gsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="ntffncbfp"/><path class="y0x7avbpd"/><path class="w4e4tsbdn"/><path class="vde11bcyd"/><path class="yxsht_gsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clipboard-x"} {...others} />);
}

export default Component;
