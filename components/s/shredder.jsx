import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3b_ypwxl.css';
import '../../css/p/pj_n05aid.css';
import '../../css/u/uc_7r3bbl.css';
import '../../css/f/fqm0nwbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x3b_ypwxl"/><path class="pj_n05aid"/><path class="uc_7r3bbl"/><path class="fqm0nwbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shredder"} {...others} />);
}

export default Component;
