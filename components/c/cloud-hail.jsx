import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1gbw5rxy.css';
import '../../css/k/kbrfgsg4f.css';
import '../../css/m/mc3p6_0qk.css';
import '../../css/e/e6njbjbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1gbw5rxy"/><path class="kbrfgsg4f"/><path class="mc3p6_0qk"/><path class="e6njbjbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-hail"} {...others} />);
}

export default Component;
