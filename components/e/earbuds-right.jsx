import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is1-e7bsp.css';
import '../../css/t/t-3v1hi-d.css';
import '../../css/z/zpc41qkph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="is1-e7bsp"/><path class="t-3v1hi-d"/><path class="zpc41qkph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-right"} {...others} />);
}

export default Component;
