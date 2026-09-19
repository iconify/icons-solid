import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdcrbbapn.css';
import '../../css/d/d2kaccbjd.css';
import '../../css/g/g_1c4cz4t.css';
import '../../css/l/lnzxizbxk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rdcrbbapn"/><path class="d2kaccbjd"/><rect class="g_1c4cz4t"/><path clip-rule="evenodd" class="lnzxizbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:printer"} {...others} />);
}

export default Component;
