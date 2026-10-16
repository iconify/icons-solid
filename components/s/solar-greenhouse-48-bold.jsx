import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_tc1dbfe.css';
import '../../css/w/w_6gb8bzx.css';
import '../../css/k/k5bzhg6-b.css';
import '../../css/q/qqdbsj5cp.css';
import '../../css/m/mc48jiv5q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s_tc1dbfe"/><path class="w_6gb8bzx"/><path class="k5bzhg6-b"/><path class="qqdbsj5cp"/><path class="mc48jiv5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-greenhouse-48-bold"} {...others} />);
}

export default Component;
