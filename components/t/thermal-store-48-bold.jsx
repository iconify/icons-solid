import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epdku6b-c.css';
import '../../css/s/s7lyrq7xx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="epdku6b-c"/><path class="s7lyrq7xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-store-48-bold"} {...others} />);
}

export default Component;
