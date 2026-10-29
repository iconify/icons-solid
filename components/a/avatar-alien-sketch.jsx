import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jy--pbbbh.css';
import '../../css/x/x5caspqqs.css';
import '../../css/o/o4j8kacgj.css';
import '../../css/z/zvmrzybbz.css';
import '../../css/z/zzq0oubsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jy--pbbbh"/><path class="wm-a x5caspqqs"/><path class="o4j8kacgj wm-k"/><path class="wm-a zvmrzybbz"/><path class="wm-s zzq0oubsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-alien-sketch"} {...others} />);
}

export default Component;
