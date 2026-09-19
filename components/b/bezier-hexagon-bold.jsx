import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hq1fvicnt.css';
import '../../css/d/dgz-gzbxp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="hq1fvicnt"/><path class="dgz-gzbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-hexagon-bold"} {...others} />);
}

export default Component;
