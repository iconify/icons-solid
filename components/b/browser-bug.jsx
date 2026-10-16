import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mua0n5teg.css';
import '../../css/z/znxqaccdm.css';
import '../../css/q/qho-7sb3x.css';
import '../../css/v/vxu1yn-dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mua0n5teg"/><path class="znxqaccdm"/><path class="qho-7sb3x"/><path class="vxu1yn-dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-bug"} {...others} />);
}

export default Component;
