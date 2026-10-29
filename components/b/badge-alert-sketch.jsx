import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g030v4bxk.css';
import '../../css/p/pxzi-t71n.css';
import '../../css/z/z9lxt0bea.css';
import '../../css/s/sqyp4qbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g030v4bxk"/><path class="pxzi-t71n wm-a"/><path class="wm-k z9lxt0bea"/><path class="sqyp4qbff wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-alert-sketch"} {...others} />);
}

export default Component;
