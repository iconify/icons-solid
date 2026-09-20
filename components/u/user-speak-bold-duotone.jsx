import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrzl4fc8i.css';
import '../../css/o/oj_agab9t.css';
import '../../css/v/vgla4kbzr.css';
import '../../css/m/mm91f5bdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vrzl4fc8i"/><path class="oj_agab9t"/><path class="vgla4kbzr"/><path class="mm91f5bdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-speak-bold-duotone"} {...others} />);
}

export default Component;
