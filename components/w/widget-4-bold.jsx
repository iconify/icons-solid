import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rm0w3acvs.css';
import '../../css/u/urak06bsx.css';
import '../../css/b/bid5r0rff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rm0w3acvs"/><path class="urak06bsx"/><path class="bid5r0rff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-4-bold"} {...others} />);
}

export default Component;
