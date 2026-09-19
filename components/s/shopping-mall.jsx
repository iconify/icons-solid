import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eq44zu3zv.css';
import '../../css/k/k2jkv656h.css';
import '../../css/f/f2vk32anf.css';
import '../../css/h/hfinebcgv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eq44zu3zv"/><path class="k2jkv656h"/><path class="f2vk32anf"/><path class="hfinebcgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shopping-mall"} {...others} />);
}

export default Component;
