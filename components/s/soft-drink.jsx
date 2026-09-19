import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kr9nmynla.css';
import '../../css/p/pcsn_fbse.css';
import '../../css/l/ldyoqd6ke.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kr9nmynla"/><path class="pcsn_fbse"/><path class="ldyoqd6ke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:soft-drink"} {...others} />);
}

export default Component;
