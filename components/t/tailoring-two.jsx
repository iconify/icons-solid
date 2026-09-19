import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x745k6bvp.css';
import '../../css/k/k75hkwblh.css';
import '../../css/l/lzhvv0_2t.css';
import '../../css/e/ep34fo3-c.css';
import '../../css/v/vbxn7_bbf.css';
import '../../css/z/zn5qzp_zu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x745k6bvp"/><path class="k75hkwblh"/><path class="lzhvv0_2t"/><path class="ep34fo3-c"/><path class="vbxn7_bbf"/><path class="zn5qzp_zu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tailoring-two"} {...others} />);
}

export default Component;
