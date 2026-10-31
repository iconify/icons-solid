import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyv-x4b7s.css';
import '../../css/a/a-a2pf-ol.css';
import '../../css/i/ier9tha9r.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="fyv-x4b7s"/><path class="a-a2pf-ol"/><path class="ier9tha9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ml"} {...others} />);
}

export default Component;
