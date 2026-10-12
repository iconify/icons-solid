import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwc5gabwv.css';
import '../../css/i/ibzn6rzyx.css';
import '../../css/l/l_rr6xk_k.css';
import '../../css/n/nmxy0q5gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nwc5gabwv"/><circle class="ibzn6rzyx"/><circle class="l_rr6xk_k"/><path class="nmxy0q5gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-clock"} {...others} />);
}

export default Component;
