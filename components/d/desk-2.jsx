import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p7yqnwbor.css';
import '../../css/v/vv7nwxbag.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="p7yqnwbor"/><path class="vv7nwxbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:desk-2"} {...others} />);
}

export default Component;
