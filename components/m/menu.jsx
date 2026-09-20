import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f5q0570dj.css';
import '../../css/z/z6fknxb_q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="f5q0570dj"/><path class="z6fknxb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:menu"} {...others} />);
}

export default Component;
