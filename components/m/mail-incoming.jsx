import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrswy588w.css';
import '../../css/y/yhcgrnbxj.css';
import '../../css/k/kchffudor.css';
import '../../css/m/m1y5-opsa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lrswy588w"/><path class="yhcgrnbxj"/><path class="kchffudor"/><path class="m1y5-opsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mail-incoming"} {...others} />);
}

export default Component;
