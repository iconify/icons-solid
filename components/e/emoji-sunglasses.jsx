import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzt-j_b7n.css';
import '../../css/m/m5bwf3b6c.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="bzt-j_b7n"/><path class="m5bwf3b6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:emoji-sunglasses"} {...others} />);
}

export default Component;
