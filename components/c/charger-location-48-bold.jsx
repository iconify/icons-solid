import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqi8izblt.css';
import '../../css/e/emg8x4zsa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eqi8izblt"/><path class="emg8x4zsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-location-48-bold"} {...others} />);
}

export default Component;
