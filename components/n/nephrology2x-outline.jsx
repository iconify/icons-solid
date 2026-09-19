import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z396b0bfg.css';
import '../../css/a/ae1738xnj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="z396b0bfg"/><path clip-rule="evenodd" class="ae1738xnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nephrology2x-outline"} {...others} />);
}

export default Component;
