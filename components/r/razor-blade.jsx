import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svlzu1bnz.css';
import '../../css/m/mw_zj7b_f.css';
import '../../css/u/uxz78fn5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="svlzu1bnz"/><path class="mw_zj7b_f"/><path class="uxz78fn5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:razor-blade"} {...others} />);
}

export default Component;
