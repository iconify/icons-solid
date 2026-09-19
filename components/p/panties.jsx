import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/s/sk8qu0bcv.css';
import '../../css/r/rp2gc-bal.css';
import '../../css/b/boyoj9f7j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="sk8qu0bcv"/><path class="rp2gc-bal"/><path class="boyoj9f7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:panties"} {...others} />);
}

export default Component;
