import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szx8rvb1l.css';
import '../../css/h/hwkr87bzo.css';
import '../../css/p/pyif0obzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="szx8rvb1l"/><path clip-rule="evenodd" class="hwkr87bzo"/><path class="pyif0obzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:copper-iud-outline"} {...others} />);
}

export default Component;
