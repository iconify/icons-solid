import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5zo75aqj.css';
import '../../css/q/q703-ub_o.css';
import '../../css/n/n2edx8btc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k5zo75aqj"/><path clip-rule="evenodd" class="q703-ub_o"/><path class="n2edx8btc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:magic-wand-1-flat"} {...others} />);
}

export default Component;
