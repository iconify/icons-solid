import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6jtv7bwq.css';
import '../../css/i/it3ng9bvg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u6jtv7bwq"/><path class="it3ng9bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:gears"} {...others} />);
}

export default Component;
