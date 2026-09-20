import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/phfnueb0e.css';
import '../../css/f/f2er5zbwv.css';

const viewBox = {"width":272.4,"height":166.3};
const content = `<g class="cuyn6tgcc"><path class="phfnueb0e"/><path class="f2er5zbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:prusa-research"} {...others} />);
}

export default Component;
