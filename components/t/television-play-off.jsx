import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjg9ffvbi.css';
import '../../css/l/lcnmw-bvs.css';
import '../../css/j/jnqq0fbyn.css';
import '../../css/c/cq9fa-b9g.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tjg9ffvbi"/><path clip-rule="evenodd" class="lcnmw-bvs"/><path clip-rule="evenodd" class="jnqq0fbyn"/><path clip-rule="evenodd" class="cq9fa-b9g"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:television-play-off"} {...others} />);
}

export default Component;
