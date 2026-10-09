import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agimoob8o.css';
import '../../css/m/m8c88eb6w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="agimoob8o"/><path class="m8c88eb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airplay-48"} {...others} />);
}

export default Component;
