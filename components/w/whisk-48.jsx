import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up8_hjm1g.css';
import '../../css/k/k_6prvftm.css';
import '../../css/q/qljqqy97f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="up8_hjm1g"/><path class="k_6prvftm"/><path class="qljqqy97f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whisk-48"} {...others} />);
}

export default Component;
