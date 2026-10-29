import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3_kl7req.css';
import '../../css/v/vgl2subiy.css';
import '../../css/u/uvog564va.css';
import '../../css/y/ykc6yv3ga.css';
import '../../css/d/de1npwusp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o3_kl7req wm-k"/><path class="vgl2subiy wm-a"/><path class="uvog564va wm-shadow"/><path class="wm-k ykc6yv3ga"/><path class="de1npwusp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-engrave"} {...others} />);
}

export default Component;
