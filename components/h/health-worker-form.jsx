import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4m1o23cu.css';
import '../../css/v/vlppg6e9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="v4m1o23cu"/><path clip-rule="evenodd" class="vlppg6e9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-worker-form"} {...others} />);
}

export default Component;
