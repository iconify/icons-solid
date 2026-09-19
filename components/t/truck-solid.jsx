import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcvdmjbdg.css';
import '../../css/n/ni8mupnkh.css';
import '../../css/j/jig8hfb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bcvdmjbdg"/><path class="ni8mupnkh"/><path class="jig8hfb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:truck-solid"} {...others} />);
}

export default Component;
