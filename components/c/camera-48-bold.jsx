import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdrt4wkoq.css';
import '../../css/i/iwhux3djk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdrt4wkoq"/><path class="iwhux3djk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-48-bold"} {...others} />);
}

export default Component;
