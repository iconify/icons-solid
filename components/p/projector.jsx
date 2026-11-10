import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3g16ccxi.css';
import '../../css/k/kxf05zbtb.css';
import '../../css/y/yrocvf_fw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z3g16ccxi"/><path class="kxf05zbtb"/><path class="yrocvf_fw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:projector"} {...others} />);
}

export default Component;
