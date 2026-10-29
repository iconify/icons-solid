import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wzo0eonru.css';
import '../../css/z/zeta229ez.css';
import '../../css/j/ji9_5zm4p.css';
import '../../css/u/ums7zcadz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wzo0eonru"/><path class="wm-a zeta229ez"/><path class="ji9_5zm4p wm-k"/><path class="ums7zcadz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folders-sketch"} {...others} />);
}

export default Component;
