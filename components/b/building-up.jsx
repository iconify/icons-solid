import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1v2ue35q.css';
import '../../css/z/z_beebviz.css';
import '../../css/v/vs2te2huy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="g1v2ue35q"/><path class="z_beebviz"/><path class="vs2te2huy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:building-up"} {...others} />);
}

export default Component;
