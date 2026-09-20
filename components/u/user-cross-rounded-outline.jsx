import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1p3t8x8f.css';
import '../../css/r/r103rjbwx.css';
import '../../css/t/tj3-gvbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1p3t8x8f"/><path class="r103rjbwx"/><path clip-rule="evenodd" class="tj3-gvbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-cross-rounded-outline"} {...others} />);
}

export default Component;
