import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unv2l9d6h.css';
import '../../css/c/cg77ixbhg.css';
import '../../css/w/wnxw6dn4a.css';
import '../../css/s/scoisiu9n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="unv2l9d6h"/><path class="cg77ixbhg"/><path class="wnxw6dn4a"/><path class="scoisiu9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:singer"} {...others} />);
}

export default Component;
