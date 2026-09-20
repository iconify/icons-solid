import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf17bt6qm.css';
import '../../css/p/pgmpppbae.css';
import '../../css/r/rkwfe99am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hf17bt6qm"/><path class="pgmpppbae"/><path class="rkwfe99am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-product-supplier-2"} {...others} />);
}

export default Component;
