import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5717g0rr.css';
import '../../css/p/p-h88lb3y.css';
import '../../css/p/pflnjityd.css';
import '../../css/b/b1pdv3b5d.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="l5717g0rr"/><path class="p-h88lb3y"/><path class="pflnjityd"/><path class="b1pdv3b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lc"} {...others} />);
}

export default Component;
