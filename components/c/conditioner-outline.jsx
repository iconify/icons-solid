import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuph7j88c.css';
import '../../css/f/fi8powr_a.css';
import '../../css/a/a6i72jxlq.css';
import '../../css/s/s7sj4-baj.css';
import '../../css/y/yf9jrjbza.css';
import '../../css/b/bc3adfcim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cuph7j88c"/><path class="fi8powr_a"/><path clip-rule="evenodd" class="a6i72jxlq"/><path class="s7sj4-baj"/><path class="yf9jrjbza"/><path class="bc3adfcim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-outline"} {...others} />);
}

export default Component;
