import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kd18vnk4i.css';
import '../../css/t/txreq5qxj.css';
import '../../css/o/ovqg6xbyk.css';
import '../../css/b/b1foumd7v.css';
import '../../css/c/cka-0ib4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kd18vnk4i"/><path class="txreq5qxj wm-a"/><path class="ovqg6xbyk wm-k"/><path class="b1foumd7v wm-a"/><path class="cka-0ib4x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-lock-sketch"} {...others} />);
}

export default Component;
