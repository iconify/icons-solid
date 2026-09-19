import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0i94ybvv.css';
import '../../css/f/far2tceml.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="w0i94ybvv"/><path clip-rule="evenodd" class="far2tceml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:moon-print"} {...others} />);
}

export default Component;
