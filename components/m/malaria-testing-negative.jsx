import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhww9rxrg.css';
import '../../css/m/m6_ihnbac.css';
import '../../css/b/b8-3t0nuv.css';
import '../../css/e/enhycbbgs.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaTestingNegative0)" class="cuyn6tgcc"><path class="vhww9rxrg"/><path clip-rule="evenodd" class="m6_ihnbac"/><path class="b8-3t0nuv"/><path clip-rule="evenodd" class="enhycbbgs"/></g><defs><clipPath id="healthiconsMalariaTestingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-testing-negative"} {...others} />);
}

export default Component;
