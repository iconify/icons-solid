import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gmqhdrbww.css';
import '../../css/t/th0xxsgwf.css';
import '../../css/t/t6qg_cbvk.css';
import '../../css/l/l5tkhob0v.css';
import '../../css/l/ly78vgcoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="gmqhdrbww"/><path class="th0xxsgwf"/><path class="t6qg_cbvk"/><ellipse transform="rotate(-15 8.714 11.328)" class="l5tkhob0v"/><path class="ly78vgcoq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-broken"} {...others} />);
}

export default Component;
