import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6xg2yb8p.css';
import '../../css/k/k86_pzbaj.css';
import '../../css/p/pokp4-yvi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w6xg2yb8p"/><path class="k86_pzbaj"/><path class="pokp4-yvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-inspection-48"} {...others} />);
}

export default Component;
