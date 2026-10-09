import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mepm0bcky.css';
import '../../css/j/jsr_zti9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mepm0bcky"/><path class="jsr_zti9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settings-48-bold"} {...others} />);
}

export default Component;
