import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow27j2bwb.css';
import '../../css/d/dlek5ngpu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ow27j2bwb"/><path clip-rule="evenodd" class="dlek5ngpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bus-bold"} {...others} />);
}

export default Component;
