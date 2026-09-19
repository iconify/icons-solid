import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g34lksqnr.css';
import '../../css/m/mhantq68w.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="g34lksqnr"/><path class="mhantq68w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:reply-all"} {...others} />);
}

export default Component;
