import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9sm96mzw.css';
import '../../css/q/q3jeqcodb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="e9sm96mzw"/><path clip-rule="evenodd" class="q3jeqcodb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-formula"} {...others} />);
}

export default Component;
