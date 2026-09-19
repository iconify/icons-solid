import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz8ba9tgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b vz8ba9tgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:waveform"} {...others} />);
}

export default Component;
