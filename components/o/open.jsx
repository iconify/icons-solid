import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsdpatbbu.css';
import '../../css/g/gqt1trakv.css';
import '../../css/z/zf-73sbfq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="dsdpatbbu"/><path class="gqt1trakv"/><path class="zf-73sbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:open"} {...others} />);
}

export default Component;
