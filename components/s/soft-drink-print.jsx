import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hixkz04yo.css';
import '../../css/z/z4wu_jb1a.css';
import '../../css/h/h4kif8bmq.css';
import '../../css/q/q2ldbubzy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="hixkz04yo"/><path clip-rule="evenodd" class="z4wu_jb1a"/><path class="h4kif8bmq"/><path class="q2ldbubzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:soft-drink-print"} {...others} />);
}

export default Component;
