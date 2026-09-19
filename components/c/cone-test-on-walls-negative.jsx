import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wj35m6bmu.css';
import '../../css/i/i4d5j3gvy.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsConeTestOnWallsNegative0)" class="cuyn6tgcc"><path class="wj35m6bmu"/><path clip-rule="evenodd" class="i4d5j3gvy"/></g><defs><clipPath id="healthiconsConeTestOnWallsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cone-test-on-walls-negative"} {...others} />);
}

export default Component;
