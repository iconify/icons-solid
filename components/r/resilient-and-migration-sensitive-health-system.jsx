import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqp09ccgi.css';
import '../../css/r/rf3zuvztw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zqp09ccgi"/><path class="rf3zuvztw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:resilient-and-migration-sensitive-health-system"} {...others} />);
}

export default Component;
