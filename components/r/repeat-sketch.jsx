import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kj_zj2cjc.css';
import '../../css/s/si9s5fb2e.css';
import '../../css/w/w4vj0mdzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kj_zj2cjc wm-k"/><path class="si9s5fb2e wm-k"/><path class="w4vj0mdzj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-sketch"} {...others} />);
}

export default Component;
