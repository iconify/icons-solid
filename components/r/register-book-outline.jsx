import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhes14ubm.css';
import '../../css/w/w7d7mlbak.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="qhes14ubm"/><path clip-rule="evenodd" class="w7d7mlbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:register-book-outline"} {...others} />);
}

export default Component;
