import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5wwd1b0k.css';
import '../../css/i/iaq2-3bcy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="p5wwd1b0k"/><path class="iaq2-3bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tablet-duo"} {...others} />);
}

export default Component;
