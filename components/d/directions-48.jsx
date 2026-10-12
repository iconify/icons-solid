import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9v47kbel.css';
import '../../css/e/e8kp6ybjw.css';
import '../../css/o/o9b-4cbec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q9v47kbel"/><path class="e8kp6ybjw"/><path class="o9b-4cbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:directions-48"} {...others} />);
}

export default Component;
