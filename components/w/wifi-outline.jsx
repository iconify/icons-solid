import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdvk-d6wd.css';
import '../../css/i/ikeeb1b_d.css';
import '../../css/w/w_a4xnomr.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="gdvk-d6wd"><path class="ikeeb1b_d"/><path class="w_a4xnomr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:wifi-outline"} {...others} />);
}

export default Component;
