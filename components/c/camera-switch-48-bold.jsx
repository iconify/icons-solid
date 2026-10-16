import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdrt4wkoq.css';
import '../../css/i/iqx5v6bmq.css';
import '../../css/r/r00bsm39p.css';
import '../../css/a/arlkf5b-p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdrt4wkoq"/><path class="iqx5v6bmq"/><path class="r00bsm39p"/><path class="arlkf5b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-switch-48-bold"} {...others} />);
}

export default Component;
