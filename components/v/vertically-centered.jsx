import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhwosdh5o.css';
import '../../css/x/xpua17bdp.css';
import '../../css/p/ple3qktap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="mhwosdh5o"/><rect class="xpua17bdp"/><path class="ple3qktap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vertically-centered"} {...others} />);
}

export default Component;
