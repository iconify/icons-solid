import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf306wb4g.css';
import '../../css/q/q0wunibak.css';
import '../../css/e/e3e6rzbrs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qf306wb4g"/><path class="q0wunibak"/><path class="e3e6rzbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-purifier-20"} {...others} />);
}

export default Component;
