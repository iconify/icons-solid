import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvzia-bph.css';
import '../../css/c/c88x-e94z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsConeTestOnNetsNegative0)" class="cuyn6tgcc"><path class="kvzia-bph"/><path clip-rule="evenodd" class="c88x-e94z"/></g><defs><clipPath id="healthiconsConeTestOnNetsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cone-test-on-nets-negative"} {...others} />);
}

export default Component;
