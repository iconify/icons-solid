import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mcjvr8b5u.css';
import '../../css/q/ql2ohgbvi.css';
import '../../css/g/geku89n_n.css';
import '../../css/r/r8c3ad2kx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mcjvr8b5u"/><path class="ql2ohgbvi wm-a"/><path class="geku89n_n wm-k"/><path class="r8c3ad2kx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-landing-sketch"} {...others} />);
}

export default Component;
