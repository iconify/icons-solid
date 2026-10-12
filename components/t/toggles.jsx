import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_qfywfql.css';
import '../../css/o/ons6tvbey.css';
import '../../css/n/nua9blc2r.css';
import '../../css/t/txmro8bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r_qfywfql"/><path class="ons6tvbey"/><path class="nua9blc2r"/><path class="txmro8bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toggles"} {...others} />);
}

export default Component;
