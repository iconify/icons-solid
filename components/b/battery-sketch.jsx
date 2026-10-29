import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjlnqmbsm.css';
import '../../css/e/ertd60wwo.css';
import '../../css/b/b7i_kkbbz.css';
import '../../css/l/l22tp1dfe.css';
import '../../css/s/s_b6r7b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cjlnqmbsm"/><path class="ertd60wwo wm-k"/><path class="b7i_kkbbz wm-k"/><path class="l22tp1dfe wm-a"/><path class="s_b6r7b0b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-sketch"} {...others} />);
}

export default Component;
