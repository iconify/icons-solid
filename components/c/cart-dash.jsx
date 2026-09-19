import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9b9njjmm.css';
import '../../css/v/vlltvh_6f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="y9b9njjmm"/><path class="vlltvh_6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cart-dash"} {...others} />);
}

export default Component;
