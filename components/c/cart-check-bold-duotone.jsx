import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihi5mdelv.css';
import '../../css/t/t4yyzh38i.css';
import '../../css/i/izhbk9bxm.css';
import '../../css/v/v72n38vfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ihi5mdelv"/><path class="t4yyzh38i"/><path class="izhbk9bxm"/><path class="v72n38vfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-check-bold-duotone"} {...others} />);
}

export default Component;
