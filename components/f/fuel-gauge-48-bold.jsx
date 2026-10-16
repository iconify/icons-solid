import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw9esif9u.css';
import '../../css/i/ikm4i4bwb.css';
import '../../css/s/s0mrvwbux.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sw9esif9u"/><path class="ikm4i4bwb"/><path class="s0mrvwbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-gauge-48-bold"} {...others} />);
}

export default Component;
