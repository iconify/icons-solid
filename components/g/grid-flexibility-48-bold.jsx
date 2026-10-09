import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy2a-4big.css';
import '../../css/b/bj4r87yrk.css';
import '../../css/s/sha9b7rmw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jy2a-4big"/><path class="bj4r87yrk"/><path class="sha9b7rmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-flexibility-48-bold"} {...others} />);
}

export default Component;
