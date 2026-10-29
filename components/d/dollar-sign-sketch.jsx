import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyhicqlan.css';
import '../../css/s/s24l1zlnp.css';
import '../../css/g/gu72yj-en.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xyhicqlan"/><path class="s24l1zlnp wm-k"/><path class="gu72yj-en wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dollar-sign-sketch"} {...others} />);
}

export default Component;
