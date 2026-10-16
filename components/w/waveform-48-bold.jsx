import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0gim_b-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n0gim_b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waveform-48-bold"} {...others} />);
}

export default Component;
