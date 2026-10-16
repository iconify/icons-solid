import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8o5yujab.css';
import '../../css/q/qdez92c3z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r8o5yujab"/><path class="qdez92c3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-dual-48"} {...others} />);
}

export default Component;
