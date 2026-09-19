import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1uypcbqv.css';
import '../../css/g/g7f03lbok.css';
import '../../css/m/m-u0l2bzu.css';
import '../../css/s/snq0_74tm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="p1uypcbqv"/><path class="g7f03lbok"/><path clip-rule="evenodd" class="m-u0l2bzu"/><rect class="snq0_74tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ying-yang-bold"} {...others} />);
}

export default Component;
