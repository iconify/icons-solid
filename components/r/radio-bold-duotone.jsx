import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/h/hp_3lhbjt.css';
import '../../css/d/dcti7r4ev.css';
import '../../css/r/ra16sl1-y.css';
import '../../css/l/luid2v2ob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="hp_3lhbjt"/><path class="dcti7r4ev"/><path class="ra16sl1-y"/><path class="luid2v2ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radio-bold-duotone"} {...others} />);
}

export default Component;
