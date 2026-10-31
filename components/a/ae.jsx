import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_lbaevlu.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/w/w8lft_h8f.css';
import '../../css/z/z3j5zrvpb.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="n_lbaevlu"/><path class="bc4gh5bbk"/><path class="w8lft_h8f"/><path class="z3j5zrvpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ae"} {...others} />);
}

export default Component;
