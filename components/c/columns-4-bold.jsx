import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4c_pmb7m.css';
import '../../css/y/y9rzt59_w.css';
import '../../css/u/uf_5n0bwx.css';
import '../../css/k/klv35m69y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i4c_pmb7m"/><path class="y9rzt59_w"/><path class="uf_5n0bwx"/><path class="klv35m69y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-4-bold"} {...others} />);
}

export default Component;
