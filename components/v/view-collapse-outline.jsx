import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2snylblg.css';
import '../../css/a/a43839bcb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="m2snylblg"/><path class="a43839bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:view-collapse-outline"} {...others} />);
}

export default Component;
