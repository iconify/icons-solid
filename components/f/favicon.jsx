import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh8uttzef.css';
import '../../css/m/m2_bo9b3j.css';
import '../../css/z/ztpy4pbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yh8uttzef"/><path class="m2_bo9b3j"/><path class="ztpy4pbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:favicon"} {...others} />);
}

export default Component;
