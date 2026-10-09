import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q70ah7b4t.css';
import '../../css/g/ggzqnruty.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/s/syfylxqea.css';
import '../../css/b/bqy7-kv9k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q70ah7b4t"/><path class="ggzqnruty"/><path class="hwjgqrbah"/><path class="syfylxqea"/><path class="bqy7-kv9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-car-x-48-bold"} {...others} />);
}

export default Component;
