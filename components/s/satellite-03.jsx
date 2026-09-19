import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w5yxk8b6x.css';
import '../../css/c/cau_lwbjl.css';
import '../../css/k/knoqyn-wa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w5yxk8b6x"/><path class="cau_lwbjl"/><path class="knoqyn-wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:satellite-03"} {...others} />);
}

export default Component;
