import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er-xn1bcz.css';
import '../../css/q/q88ol6dra.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="er-xn1bcz"/><path class="q88ol6dra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-items-center-bold"} {...others} />);
}

export default Component;
