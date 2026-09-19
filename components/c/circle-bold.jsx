import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_gs00bhm.css';
import '../../css/p/psi-g6z7q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="i_gs00bhm"/><path class="psi-g6z7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:circle-bold"} {...others} />);
}

export default Component;
