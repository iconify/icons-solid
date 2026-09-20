import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc2oourwb.css';
import '../../css/p/pvr6if5hc.css';
import '../../css/r/rakoyhd2b.css';
import '../../css/z/zxz2a-0bd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nc2oourwb"/><path class="pvr6if5hc"/><path class="rakoyhd2b"/><path class="zxz2a-0bd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:skull-1"} {...others} />);
}

export default Component;
