import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f19t8obgt.css';
import '../../css/j/jg_krbcqk.css';
import '../../css/l/l5e9zsbxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="f19t8obgt"/><circle transform="rotate(90 12 12)" class="jg_krbcqk"/><path class="l5e9zsbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:x-circle"} {...others} />);
}

export default Component;
