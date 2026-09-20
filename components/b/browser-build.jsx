import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyf_wuz_i.css';
import '../../css/l/lu0qoibjl.css';
import '../../css/z/zgmqv6l8n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zyf_wuz_i"/><path class="lu0qoibjl"/><path class="zgmqv6l8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-build"} {...others} />);
}

export default Component;
