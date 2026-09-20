import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/p/pvo3733cx.css';
import '../../css/m/mdwbzzaez.css';
import '../../css/e/euagplbru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="pvo3733cx"/><path class="mdwbzzaez"/><path class="euagplbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bug-virus-browser"} {...others} />);
}

export default Component;
