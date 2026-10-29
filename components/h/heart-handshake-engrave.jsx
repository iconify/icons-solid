import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t59y1x68s.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/l/limdijbpw.css';
import '../../css/v/v8-23cc5p.css';
import '../../css/d/dyiyaobfk.css';
import '../../css/b/bbmm76bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t59y1x68s wm-k"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="limdijbpw wm-a"/><path class="v8-23cc5p wm-a"/><path class="dyiyaobfk wm-a"/><path class="bbmm76bvh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-handshake-engrave"} {...others} />);
}

export default Component;
