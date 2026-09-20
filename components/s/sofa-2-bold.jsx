import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6jvy1bcp.css';
import '../../css/a/a12-1fbxe.css';
import '../../css/c/c6sd4lv5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p6jvy1bcp"/><path class="a12-1fbxe"/><path class="c6sd4lv5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-bold"} {...others} />);
}

export default Component;
