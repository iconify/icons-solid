import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swwbd6m4c.css';
import '../../css/a/akzljmbho.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="swwbd6m4c"/><path clip-rule="evenodd" class="akzljmbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-earth-bold"} {...others} />);
}

export default Component;
