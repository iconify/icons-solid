import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5_k-pikw.css';
import '../../css/f/falv_c03p.css';
import '../../css/g/ggu0prboh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y5_k-pikw"/><path clip-rule="evenodd" class="falv_c03p"/><path clip-rule="evenodd" class="ggu0prboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:live-photo"} {...others} />);
}

export default Component;
