import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7o1r-80a.css';
import '../../css/a/ah0ch-vyf.css';
import '../../css/q/q_yh57bfs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e7o1r-80a"/><path class="ah0ch-vyf"/><path class="q_yh57bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:demand-response-20"} {...others} />);
}

export default Component;
