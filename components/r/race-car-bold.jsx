import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve3z1lb2g.css';
import '../../css/l/lxg7su77s.css';
import '../../css/p/p3mukqotj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ve3z1lb2g"/><path clip-rule="evenodd" class="lxg7su77s"/><path class="p3mukqotj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:race-car-bold"} {...others} />);
}

export default Component;
