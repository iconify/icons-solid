import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p7souxn-q.css';
import '../../css/k/krljh2b0z.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="p7souxn-q"/><path class="krljh2b0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bag-alt-1"} {...others} />);
}

export default Component;
