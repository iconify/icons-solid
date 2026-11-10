import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v41wkb5eq.css';
import '../../css/l/lcs0s0bnz.css';
import '../../css/i/i2wbyxbqs.css';
import '../../css/k/kwmf-dr2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v41wkb5eq"/><path class="lcs0s0bnz"/><path class="i2wbyxbqs"/><path class="kwmf-dr2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard"} {...others} />);
}

export default Component;
