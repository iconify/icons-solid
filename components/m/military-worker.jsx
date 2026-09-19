import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbehgn6qb.css';
import '../../css/g/gt4fqkosk.css';
import '../../css/e/eiaq64bmn.css';
import '../../css/f/fajoa5bmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fbehgn6qb"/><path class="gt4fqkosk"/><path clip-rule="evenodd" class="eiaq64bmn"/><path class="fajoa5bmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:military-worker"} {...others} />);
}

export default Component;
