import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohkjqsbos.css';
import '../../css/t/tl2fuobsj.css';
import '../../css/t/t01m3nb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ohkjqsbos"/><circle class="tl2fuobsj"/><path class="t01m3nb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:receive-limit-outline"} {...others} />);
}

export default Component;
