import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvt6cd8su.css';
import '../../css/x/x9k0s653n.css';
import '../../css/w/wyuy4ccbq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jvt6cd8su"/><path class="x9k0s653n"/><path class="wyuy4ccbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:train-station-48"} {...others} />);
}

export default Component;
