import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mi7y_nv-e.css';
import '../../css/a/al2n4txeu.css';
import '../../css/p/pq1poqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mi7y_nv-e"/><path class="al2n4txeu"/><path class="pq1poqbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
