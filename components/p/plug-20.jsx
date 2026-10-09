import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl3kfub2g.css';
import '../../css/q/quvshjb7w.css';
import '../../css/g/g4ik5wbbj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dl3kfub2g"/><path class="quvshjb7w"/><path class="g4ik5wbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-20"} {...others} />);
}

export default Component;
