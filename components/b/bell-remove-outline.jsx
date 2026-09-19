import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av4gw518w.css';
import '../../css/f/fa6jpzb7g.css';
import '../../css/v/vcy3f8_9t.css';
import '../../css/v/vs29xyb9q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="av4gw518w"/><path class="fa6jpzb7g"/><path clip-rule="evenodd" class="vcy3f8_9t"/><path class="vs29xyb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-remove-outline"} {...others} />);
}

export default Component;
