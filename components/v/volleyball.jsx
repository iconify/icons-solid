import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/m/m9104igsh.css';
import '../../css/w/w455zy2rh.css';
import '../../css/h/h-qhc362c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="m9104igsh"/><path class="w455zy2rh"/><path class="h-qhc362c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:volleyball"} {...others} />);
}

export default Component;
