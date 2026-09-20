import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/j/jtlouza2l.css';
import '../../css/n/nxxv_1b1r.css';
import '../../css/w/wn9x-45yz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="jtlouza2l"/><path class="nxxv_1b1r"/><path class="wn9x-45yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pi-symbol-circle"} {...others} />);
}

export default Component;
