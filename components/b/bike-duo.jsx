import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy4egu67j.css';
import '../../css/e/ed6fslw1h.css';
import '../../css/w/w7ft8mb7g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oy4egu67j"/><path class="ed6fslw1h"/><path class="w7ft8mb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bike-duo"} {...others} />);
}

export default Component;
