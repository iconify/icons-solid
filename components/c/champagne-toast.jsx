import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/ftv_f1wkh.css';
import '../../css/s/s8khy9bka.css';
import '../../css/h/hpycffb-n.css';
import '../../css/q/qkff5wbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ftv_f1wkh wm-shadow"/><path class="s8khy9bka wm-shadow"/><path class="hpycffb-n"/><path class="qkff5wbzg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:champagne-toast"} {...others} />);
}

export default Component;
