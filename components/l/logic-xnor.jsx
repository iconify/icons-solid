import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dl7q59bzj.css';
import '../../css/j/jz601-d3q.css';
import '../../css/l/l-e5exbsa.css';
import '../../css/o/o1ptyhwmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dl7q59bzj"/><path class="jz601-d3q"/><circle class="l-e5exbsa"/><circle class="o1ptyhwmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:logic-xnor"} {...others} />);
}

export default Component;
