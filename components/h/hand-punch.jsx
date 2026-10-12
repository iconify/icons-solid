import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5nd0lbcz.css';
import '../../css/s/slqhyxepq.css';
import '../../css/c/cqe2ncy-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t5nd0lbcz"/><path class="slqhyxepq"/><path class="cqe2ncy-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-punch"} {...others} />);
}

export default Component;
