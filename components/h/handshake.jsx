import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gasok8b6f.css';
import '../../css/u/u9ji9vbog.css';
import '../../css/o/ob1k5lbpt.css';
import '../../css/f/fhjmig3kr.css';
import '../../css/x/x2u6iwlxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gasok8b6f"/><path class="u9ji9vbog"/><path class="ob1k5lbpt"/><path class="fhjmig3kr"/><path class="x2u6iwlxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:handshake"} {...others} />);
}

export default Component;
