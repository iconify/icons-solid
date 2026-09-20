import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkynpkbvl.css';
import '../../css/a/awa22zbtc.css';
import '../../css/b/by4dlac8v.css';
import '../../css/b/ba75mr9ie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zkynpkbvl"/><path class="awa22zbtc"/><path class="by4dlac8v"/><path class="ba75mr9ie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-bold"} {...others} />);
}

export default Component;
