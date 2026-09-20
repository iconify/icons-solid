import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6e72xb0h.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/k/k6_w0tbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i6e72xb0h"/><path class="c_zdt_bqs"/><path class="k6_w0tbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-block-bold-duotone"} {...others} />);
}

export default Component;
