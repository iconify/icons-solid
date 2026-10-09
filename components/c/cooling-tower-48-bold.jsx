import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhnl4rs5r.css';
import '../../css/c/cj33u3imh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qhnl4rs5r"/><path class="cj33u3imh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooling-tower-48-bold"} {...others} />);
}

export default Component;
