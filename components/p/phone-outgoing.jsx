import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdxwtybrp.css';
import '../../css/z/zg0sxcbun.css';
import '../../css/n/nn59byzyh.css';
import '../../css/u/uwmz0mb7b.css';
import '../../css/y/ypsqbk-pd.css';
import '../../css/z/zw_2fjbfr.css';
import '../../css/f/f20a1rbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kdxwtybrp wm-k"/><path class="wm-k zg0sxcbun"/><path class="nn59byzyh wm-k"/><path class="uwmz0mb7b wm-shine"/><path class="wm-s ypsqbk-pd"/><path class="wm-s zw_2fjbfr"/><path class="f20a1rbcz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:phone-outgoing"} {...others} />);
}

export default Component;
