import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djrh81b_g.css';
import '../../css/d/de1yf9b_m.css';
import '../../css/f/fw02rxb_s.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="djrh81b_g"/><path clip-rule="evenodd" class="de1yf9b_m"/><path clip-rule="evenodd" class="fw02rxb_s"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cancerous-cell-nuclei-outline"} {...others} />);
}

export default Component;
