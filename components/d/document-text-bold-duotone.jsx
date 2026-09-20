import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/n/ncwgojbur.css';
import '../../css/r/rqdgvgazq.css';
import '../../css/k/k5wdjsmoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jjq2qh_fp"/><path class="ncwgojbur"/><path class="rqdgvgazq"/><path class="k5wdjsmoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-text-bold-duotone"} {...others} />);
}

export default Component;
