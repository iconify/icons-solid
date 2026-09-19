import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qgud6ebjl.css';
import '../../css/c/c5s6s5bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="qgud6ebjl"/><path class="c5s6s5bvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-3-outline"} {...others} />);
}

export default Component;
