import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxzlycbfj.css';
import '../../css/c/ckk9d1fqg.css';
import '../../css/k/k_0is30km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cxzlycbfj"/><path class="ckk9d1fqg"/><path class="k_0is30km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-back-circle-bold-duotone"} {...others} />);
}

export default Component;
