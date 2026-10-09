import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/c/cz084qvho.css';
import '../../css/j/j_9gt8bfj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="cz084qvho"/><path class="j_9gt8bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lifebuoy-20"} {...others} />);
}

export default Component;
