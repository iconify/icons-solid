import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svomqsbwm.css';
import '../../css/p/pl0cy8lhw.css';
import '../../css/b/bhksgtuyz.css';
import '../../css/f/fqvtfcc8f.css';
import '../../css/e/epiix7xxl.css';
import '../../css/j/jewrfbbrk.css';
import '../../css/l/lr1d9gb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 15.4 3.58)" class="svomqsbwm"/><rect transform="rotate(135 -1.4 8.438)scale(1 -1)" class="pl0cy8lhw"/><rect transform="rotate(-45 10.62 5.63)" class="bhksgtuyz"/><rect transform="rotate(135 .617 6.474)scale(1 -1)" class="fqvtfcc8f"/><path class="epiix7xxl"/><path class="jewrfbbrk"/><path class="lr1d9gb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dumbbell"} {...others} />);
}

export default Component;
