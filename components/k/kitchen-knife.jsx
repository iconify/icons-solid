import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d__xjebgu.css';
import '../../css/k/k0q1dxb2e.css';
import '../../css/o/oze5v2bxa.css';
import '../../css/w/whva_pu8o.css';
import '../../css/i/ig4__6bfv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d__xjebgu"/><path class="k0q1dxb2e"/><path class="oze5v2bxa"/><path class="whva_pu8o"/><path class="ig4__6bfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kitchen-knife"} {...others} />);
}

export default Component;
