import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz1mobb4k.css';
import '../../css/t/tnsmnzdvo.css';
import '../../css/e/ecyiiytap.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><circle class="jz1mobb4k"/><circle class="tnsmnzdvo"/><circle class="ecyiiytap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:ellipsis-26"} {...others} />);
}

export default Component;
