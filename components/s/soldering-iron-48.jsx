import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awek-epgl.css';
import '../../css/b/brfai6b9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="awek-epgl"/><path class="brfai6b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soldering-iron-48"} {...others} />);
}

export default Component;
