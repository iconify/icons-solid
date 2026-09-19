import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgxfxxbfa.css';
import '../../css/d/dlzwfk8ub.css';
import '../../css/y/y1wcivbjr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bgxfxxbfa"/><path class="dlzwfk8ub"/><path class="y1wcivbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:exclude-bold"} {...others} />);
}

export default Component;
