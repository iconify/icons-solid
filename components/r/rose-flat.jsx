import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yt10q1whe.css';
import '../../css/d/dg_3geblb.css';
import '../../css/e/e6y3v_b_d.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yt10q1whe"/><path class="dg_3geblb"/><path class="e6y3v_b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rose-flat"} {...others} />);
}

export default Component;
