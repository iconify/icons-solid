import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuesjrb9u.css';
import '../../css/l/l9rkj3bjb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTravelNegative0)" class="cuyn6tgcc"><path class="kuesjrb9u"/><path clip-rule="evenodd" class="l9rkj3bjb"/></g><defs><clipPath id="healthiconsTravelNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:travel-negative"} {...others} />);
}

export default Component;
