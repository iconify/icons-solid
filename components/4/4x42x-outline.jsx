import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erkbk1bws.css';
import '../../css/q/qk73ghbvw.css';
import '../../css/p/p7irl_svi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="erkbk1bws"/><path clip-rule="evenodd" class="qk73ghbvw"/><path class="p7irl_svi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:4x42x-outline"} {...others} />);
}

export default Component;
