import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe8xottkx.css';
import '../../css/w/wh1r03b-i.css';
import '../../css/k/k3lgfsb0i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qe8xottkx"/><path class="wh1r03b-i"/><path class="k3lgfsb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-cable-48-bold"} {...others} />);
}

export default Component;
