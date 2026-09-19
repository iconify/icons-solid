import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/a/ar9ebrmpm.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/u/uim7_ccml.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="ar9ebrmpm"/><path class="cq0hx26ww"/><path class="uim7_ccml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-americas-duo"} {...others} />);
}

export default Component;
