import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la3_0ttax.css';
import '../../css/k/kt50xhkkm.css';
import '../../css/w/w9s6t4b_c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="la3_0ttax"/><path clip-rule="evenodd" class="kt50xhkkm"/><path class="w9s6t4b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:location-pin-3-flat"} {...others} />);
}

export default Component;
