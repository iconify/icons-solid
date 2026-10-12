import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0llzxvsb.css';
import '../../css/e/e39h_spdh.css';
import '../../css/j/j20uog8ez.css';
import '../../css/u/u3ffo5b3p.css';
import '../../css/v/v3r8yacue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s0llzxvsb"/><rect transform="matrix(0 -1 -1 0 14.78 5.03)" class="e39h_spdh"/><circle transform="rotate(90 12 15.24)" class="j20uog8ez"/><path class="u3ffo5b3p"/><path class="v3r8yacue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:potion"} {...others} />);
}

export default Component;
