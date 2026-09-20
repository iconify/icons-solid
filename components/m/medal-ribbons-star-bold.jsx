import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfg-kmbob.css';
import '../../css/e/e3z0bnbgy.css';
import '../../css/l/lsi0rnb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tfg-kmbob"/><path class="e3z0bnbgy"/><path clip-rule="evenodd" class="lsi0rnb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-bold"} {...others} />);
}

export default Component;
