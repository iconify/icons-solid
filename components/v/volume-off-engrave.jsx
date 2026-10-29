import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/l/l8c4rkbqx.css';
import '../../css/y/y9npttv3e.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/d/d074ckbgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="l8c4rkbqx wm-s"/><path class="wm-shadow y9npttv3e"/><path class="st-oxhb_e wm-k"/><path class="d074ckbgd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-off-engrave"} {...others} />);
}

export default Component;
