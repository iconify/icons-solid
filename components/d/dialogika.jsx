import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e3vhn77hg.css';
import '../../css/n/ni51_iw8t.css';
import '../../css/w/wgk97yw9n.css';

const viewBox = {"width":323,"height":218};
const content = `<g class="d2kvgvbvc"><path class="e3vhn77hg"/><path class="ni51_iw8t"/><path class="wgk97yw9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dialogika"} {...others} />);
}

export default Component;
