import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n3ax_-4po.css';
import '../../css/b/bgwri0b1n.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="n3ax_-4po"/><path class="bgwri0b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:contrass"} {...others} />);
}

export default Component;
