import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp-8xbcar.css';
import '../../css/s/sw1rf8b4b.css';
import '../../css/b/b3fhqxbyf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mp-8xbcar"/><path class="sw1rf8b4b"/><path class="b3fhqxbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circuit-breaker-48"} {...others} />);
}

export default Component;
