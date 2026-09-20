import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zb_vxh5gs.css';
import '../../css/n/n6wsh-bqa.css';
import '../../css/e/e79pd9why.css';
import '../../css/t/tsu6e92pn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zb_vxh5gs"/><path class="n6wsh-bqa"/><path class="e79pd9why"/><path class="tsu6e92pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:file-bookmark"} {...others} />);
}

export default Component;
