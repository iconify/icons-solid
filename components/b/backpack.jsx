import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g6uy-hb_n.css';
import '../../css/w/woa0glbmu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="g6uy-hb_n"/><path class="woa0glbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:backpack"} {...others} />);
}

export default Component;
