import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l-pysdxjg.css';
import '../../css/l/lilb5_awy.css';
import '../../css/m/mo4-r3vsv.css';
import '../../css/x/x7twskxam.css';
import '../../css/k/kck-09bwl.css';
import '../../css/o/og3p9brbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l-pysdxjg"/><path class="lilb5_awy wm-k"/><path class="mo4-r3vsv wm-a"/><path class="wm-k x7twskxam"/><path class="kck-09bwl wm-a"/><path class="og3p9brbx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unplug-sketch"} {...others} />);
}

export default Component;
