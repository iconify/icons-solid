import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4be0ccsn.css';
import '../../css/l/l4eep0bfa.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="a4be0ccsn"/><path class="l4eep0bfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:door-closed"} {...others} />);
}

export default Component;
