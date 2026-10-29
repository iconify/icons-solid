import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c-ef78b2g.css';
import '../../css/k/ky74_dbht.css';
import '../../css/k/kgfhzmbhl.css';
import '../../css/t/t_1vhibtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c-ef78b2g wm-k"/><path class="ky74_dbht wm-a"/><path class="kgfhzmbhl wm-k"/><path class="t_1vhibtu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-basket-sketch"} {...others} />);
}

export default Component;
