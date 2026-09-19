import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-p0ybueh.css';
import '../../css/z/z3p87-2kc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j-p0ybueh"/><path clip-rule="evenodd" class="z3p87-2kc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:icd"} {...others} />);
}

export default Component;
