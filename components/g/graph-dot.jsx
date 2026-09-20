import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nsdvgu6nr.css';
import '../../css/j/jhel0bbvx.css';
import '../../css/r/rd9eu4bnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nsdvgu6nr"/><path class="jhel0bbvx"/><path class="rd9eu4bnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graph-dot"} {...others} />);
}

export default Component;
