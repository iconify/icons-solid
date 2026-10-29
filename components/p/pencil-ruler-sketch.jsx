import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uivb_ubdk.css';
import '../../css/v/v55zsebyu.css';
import '../../css/q/q6z6ai9lv.css';
import '../../css/v/vkq-kzxjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uivb_ubdk"/><path class="v55zsebyu wm-a"/><path class="q6z6ai9lv wm-k"/><path class="vkq-kzxjk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-ruler-sketch"} {...others} />);
}

export default Component;
