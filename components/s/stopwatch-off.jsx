import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jyxq1sbkh.css';
import '../../css/u/uro8bvlfh.css';
import '../../css/g/gf6hfkbax.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jyxq1sbkh"/><path clip-rule="evenodd" class="uro8bvlfh"/><path clip-rule="evenodd" class="gf6hfkbax"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:stopwatch-off"} {...others} />);
}

export default Component;
