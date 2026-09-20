import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl-yb4s0v.css';
import '../../css/g/g4pqkcclt.css';
import '../../css/r/rfjwc7d-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hl-yb4s0v"/><path clip-rule="evenodd" class="g4pqkcclt"/><path class="rfjwc7d-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:browser-cookie"} {...others} />);
}

export default Component;
