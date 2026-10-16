import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huab2dirh.css';
import '../../css/o/o6zu0fbsa.css';
import '../../css/i/ik1ojz0cj.css';
import '../../css/m/m85qfgb7r.css';
import '../../css/r/ry-_esbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="huab2dirh"/><path class="o6zu0fbsa"/><path class="ik1ojz0cj"/><path class="m85qfgb7r"/><path class="ry-_esbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:digital-twin-48-bold"} {...others} />);
}

export default Component;
