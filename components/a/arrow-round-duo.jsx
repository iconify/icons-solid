import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdhkjuint.css';
import '../../css/f/fwk2_2b-q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hdhkjuint"/><path class="fwk2_2b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-round-duo"} {...others} />);
}

export default Component;
