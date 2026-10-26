import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpctkhcgf.css';
import '../../css/c/cpnat3u3d.css';
import '../../css/b/b14djybkm.css';

const viewBox = {"width":402,"height":100};
const content = `<path clip-rule="evenodd" class="xpctkhcgf"/><path class="cpnat3u3d"/><path class="b14djybkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mage-ai"} {...others} />);
}

export default Component;
