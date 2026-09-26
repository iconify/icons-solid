import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3gl9bn5q.css';
import '../../css/z/zs6bp64jw.css';
import '../../css/c/ckuycxbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y3gl9bn5q"/><path class="zs6bp64jw"/><path class="ckuycxbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-quote-outline"} {...others} />);
}

export default Component;
