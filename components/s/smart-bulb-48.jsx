import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs-cefb8p.css';
import '../../css/d/dtun6abyq.css';
import '../../css/b/b5u-9mb6w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bs-cefb8p"/><path class="dtun6abyq"/><path class="b5u-9mb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-bulb-48"} {...others} />);
}

export default Component;
