import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okusuaboz.css';
import '../../css/m/msynidc3r.css';
import '../../css/l/lzsxj9r9o.css';
import '../../css/r/r7k_16bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="okusuaboz"/><path class="msynidc3r wm-k"/><path class="lzsxj9r9o wm-k"/><path class="r7k_16bhv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-round-sketch"} {...others} />);
}

export default Component;
