import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrqam2b2u.css';
import '../../css/l/liw2htv9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mrqam2b2u"/><path class="liw2htv9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bungalow-48-bold"} {...others} />);
}

export default Component;
