import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9l86ghgr.css';
import '../../css/s/swbe_ab5l.css';
import '../../css/g/gqs7xpbhd.css';
import '../../css/e/evayibbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b9l86ghgr"/><path class="swbe_ab5l wm-a"/><path class="gqs7xpbhd wm-k"/><path class="evayibbik wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bear-sketch"} {...others} />);
}

export default Component;
