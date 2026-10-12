import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gkvar5_4g.css';
import '../../css/d/dap9s9bzf.css';
import '../../css/q/qovhyw9bj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gkvar5_4g"/><path class="dap9s9bzf"/><path class="qovhyw9bj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:moon-zzz"} {...others} />);
}

export default Component;
