import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_legj-7r.css';
import '../../css/p/pi800kvzj.css';
import '../../css/k/kn_b06mhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l_legj-7r"/><path class="pi800kvzj"/><path class="kn_b06mhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bread-slice"} {...others} />);
}

export default Component;
