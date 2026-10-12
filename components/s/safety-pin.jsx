import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wst-d9bvl.css';
import '../../css/d/dgf53-e9k.css';
import '../../css/p/p9wtf3bff.css';
import '../../css/n/nt23ruguf.css';
import '../../css/u/uhwhn3b_h.css';
import '../../css/a/a9l8w0bjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(135.7 4.7 19.47)" class="wst-d9bvl"/><path class="dgf53-e9k"/><path class="p9wtf3bff"/><path class="nt23ruguf"/><circle transform="rotate(135.7 4.7 19.47)" class="uhwhn3b_h"/><path class="a9l8w0bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:safety-pin"} {...others} />);
}

export default Component;
