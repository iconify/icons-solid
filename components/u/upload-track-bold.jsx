import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtedal7-d.css';
import '../../css/x/xwh5nd-be.css';
import '../../css/z/z27mt2r4g.css';
import '../../css/x/xem_2fbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dtedal7-d"/><path class="xwh5nd-be"/><path class="z27mt2r4g"/><path clip-rule="evenodd" class="xem_2fbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-bold"} {...others} />);
}

export default Component;
