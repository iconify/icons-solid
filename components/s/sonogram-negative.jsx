import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lc7wpp7xj.css';
import '../../css/i/ifffufbqi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsSonogramNegative0)" class="cuyn6tgcc"><path class="lc7wpp7xj"/><path clip-rule="evenodd" class="ifffufbqi"/></g><defs><clipPath id="healthiconsSonogramNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sonogram-negative"} {...others} />);
}

export default Component;
