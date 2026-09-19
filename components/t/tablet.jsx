import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qojb79vkl.css';
import '../../css/p/p3-bwf-tg.css';
import '../../css/y/ycfdc-bvw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qojb79vkl"/><path class="p3-bwf-tg"/><path clip-rule="evenodd" class="ycfdc-bvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tablet"} {...others} />);
}

export default Component;
