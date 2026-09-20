import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vxz3hkt8w.css';
import '../../css/k/ka2iznb2q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vxz3hkt8w"/><path class="ka2iznb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:share-alt-5"} {...others} />);
}

export default Component;
