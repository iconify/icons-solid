import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/h/hq_2hbb4o.css';
import '../../css/x/xdw3fzbee.css';
import '../../css/r/rzxsj7d7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="hq_2hbb4o"/><path class="xdw3fzbee"/><path clip-rule="evenodd" class="rzxsj7d7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-tag-bold-duotone"} {...others} />);
}

export default Component;
