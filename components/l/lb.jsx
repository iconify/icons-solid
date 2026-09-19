import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i-1p3lb_t.css';
import '../../css/k/kl8-xzbpl.css';
import '../../css/w/w6qdnyb5q.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i-1p3lb_t"/><path class="kl8-xzbpl"/><path class="w6qdnyb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:lb"} {...others} />);
}

export default Component;
