import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/u/u9gxspzkf.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/f/fz1n9lbbo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="u9gxspzkf"/><path class="cq0hx26ww"/><path class="fz1n9lbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-north-america-duo"} {...others} />);
}

export default Component;
