import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-m8u9jel.css';
import '../../css/x/x2gb78bod.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k-m8u9jel"/><path class="x2gb78bod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nausea"} {...others} />);
}

export default Component;
