import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oa8x24byn.css';
import '../../css/n/nlz_nebpp.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<g class="cuyn6tgcc"><path class="oa8x24byn"/><path class="nlz_nebpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:battery-f"} {...others} />);
}

export default Component;
