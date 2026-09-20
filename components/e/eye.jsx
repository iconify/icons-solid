import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl_x59b9b.css';
import '../../css/u/u8ploep_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tl_x59b9b"/><path class="u8ploep_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:eye"} {...others} />);
}

export default Component;
