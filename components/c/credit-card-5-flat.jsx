import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtiifvzmi.css';
import '../../css/j/jbfqibceq.css';
import '../../css/k/kc2uqnbyi.css';
import '../../css/p/pfb14lbwh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qtiifvzmi"/><path class="jbfqibceq"/><path class="kc2uqnbyi"/><path clip-rule="evenodd" class="pfb14lbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:credit-card-5-flat"} {...others} />);
}

export default Component;
