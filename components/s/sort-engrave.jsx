import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnol45y_o.css';
import '../../css/a/a4hjggb0v.css';
import '../../css/k/k_zyttb9q.css';
import '../../css/z/zmx3w_bje.css';
import '../../css/l/lof7i1b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rnol45y_o wm-k"/><path class="a4hjggb0v wm-a"/><path class="k_zyttb9q wm-shadow"/><path class="wm-k zmx3w_bje"/><path class="lof7i1b0v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-engrave"} {...others} />);
}

export default Component;
