import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h56op_7tl.css';
import '../../css/l/lhlp-obvy.css';
import '../../css/j/ja0wztbpr.css';
import '../../css/n/nmghvqs2p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h56op_7tl"/><path class="lhlp-obvy"/><path class="ja0wztbpr"/><path class="nmghvqs2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bandage-1"} {...others} />);
}

export default Component;
