import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cq5fgnbzq.css';
import '../../css/o/oqtrjux1w.css';
import '../../css/y/y2nul6bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cq5fgnbzq"/><path class="oqtrjux1w"/><path class="y2nul6bzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earth-filled"} {...others} />);
}

export default Component;
