import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg0x8wbbw.css';
import '../../css/t/teu70lbwu.css';
import '../../css/n/n5rv5xb9z.css';
import '../../css/c/c_u455ssc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dg0x8wbbw"/><path class="teu70lbwu"/><path class="n5rv5xb9z"/><path class="c_u455ssc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:intersect"} {...others} />);
}

export default Component;
