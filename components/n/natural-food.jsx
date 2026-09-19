import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/x7x54wbvt.css';
import '../../css/q/qsiepsn6y.css';
import '../../css/j/jefvngbai.css';
import '../../css/f/fvjw0u_xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="x7x54wbvt"/><path class="qsiepsn6y"/><path class="jefvngbai"/><path class="fvjw0u_xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:natural-food"} {...others} />);
}

export default Component;
