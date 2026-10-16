import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3vl4ebce.css';
import '../../css/w/wl7nksb1u.css';

const viewBox = {"width":463,"height":463};
const content = `<g class="ft5dv1b6b"><path class="t3vl4ebce"/><path class="wl7nksb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openfga-dark"} {...others} />);
}

export default Component;
