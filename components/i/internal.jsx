import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f83lo_bbe.css';
import '../../css/n/nnd46w4ky.css';
import '../../css/h/hd4_l7bgy.css';
import '../../css/e/e04d3abid.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="f83lo_bbe"/><g class="nnd46w4ky"><path class="hd4_l7bgy"/><path class="e04d3abid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:internal"} {...others} />);
}

export default Component;
