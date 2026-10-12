import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eksto926v.css';
import '../../css/g/gpu_i7bxv.css';
import '../../css/k/k2h3-dbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eksto926v"/><path class="gpu_i7bxv"/><path class="k2h3-dbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-download"} {...others} />);
}

export default Component;
