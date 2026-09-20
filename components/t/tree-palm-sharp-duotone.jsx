import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/km8t0nbnq.css';
import '../../css/b/bsycqubto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="km8t0nbnq"/><path class="bsycqubto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tree-palm-sharp-duotone"} {...others} />);
}

export default Component;
