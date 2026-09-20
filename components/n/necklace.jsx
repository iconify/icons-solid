import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2n82oqvn.css';
import '../../css/h/h8tw3o3rj.css';
import '../../css/b/bvk792blv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u2n82oqvn"/><path class="h8tw3o3rj"/><path class="bvk792blv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:necklace"} {...others} />);
}

export default Component;
