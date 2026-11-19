import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7acvhbqj.css';
import '../../css/j/jp0vc9btq.css';
import '../../css/h/hmtz4ebxg.css';
import '../../css/r/rrbzk-bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e7acvhbqj"/><path class="jp0vc9btq"/><path class="hmtz4ebxg"/><path class="rrbzk-bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-floating"} {...others} />);
}

export default Component;
