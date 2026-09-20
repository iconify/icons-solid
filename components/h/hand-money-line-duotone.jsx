import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r9tse954q.css';
import '../../css/c/cy8pspboa.css';
import '../../css/f/fdm-_r-hr.css';
import '../../css/j/jb7zwqbit.css';
import '../../css/f/fy7ps5bze.css';
import '../../css/p/pvv-ybbio.css';
import '../../css/a/aw7yywbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r9tse954q"/><path class="cy8pspboa"/><path class="fdm-_r-hr"/><path class="jb7zwqbit"/><path class="fy7ps5bze"/><path class="pvv-ybbio"/><path class="aw7yywbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-line-duotone"} {...others} />);
}

export default Component;
