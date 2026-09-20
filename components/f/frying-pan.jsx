import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dlkii0bzu.css';
import '../../css/n/nu86q5zig.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="dlkii0bzu"/><path class="nu86q5zig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:frying-pan"} {...others} />);
}

export default Component;
