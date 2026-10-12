import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ci-2t35kv.css';
import '../../css/a/ajnmmsbpn.css';
import '../../css/x/x__69mbhk.css';
import '../../css/r/r9wbfpb3o.css';
import '../../css/l/l62k_f7zw.css';
import '../../css/w/wxwc83c7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ci-2t35kv"/><path class="ajnmmsbpn"/><path class="x__69mbhk"/><rect class="r9wbfpb3o"/><rect class="l62k_f7zw"/><path class="wxwc83c7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-binary"} {...others} />);
}

export default Component;
