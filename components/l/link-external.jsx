import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dl3v1k17t.css';
import '../../css/e/edkgiwyzq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dl3v1k17t"/><path class="edkgiwyzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:link-external"} {...others} />);
}

export default Component;
