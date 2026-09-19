import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtubnabwv.css';
import '../../css/d/dhewf6b3g.css';
import '../../css/n/nxd3_8gtw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="dtubnabwv"/><path class="dhewf6b3g"/><path clip-rule="evenodd" class="nxd3_8gtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1-slash-bold"} {...others} />);
}

export default Component;
