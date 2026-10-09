import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrsls2auw.css';
import '../../css/f/fapgrnb1n.css';
import '../../css/l/l9gndm50e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nrsls2auw"/><path class="fapgrnb1n"/><path class="l9gndm50e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bird-safe-48-bold"} {...others} />);
}

export default Component;
