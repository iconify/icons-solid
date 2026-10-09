import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnzsb3g7n.css';
import '../../css/n/ngz04xzwl.css';
import '../../css/g/gum8373jm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wnzsb3g7n"/><path class="ngz04xzwl"/><path class="gum8373jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-down-48-bold"} {...others} />);
}

export default Component;
