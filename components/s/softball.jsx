import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3dpzbtra.css';
import '../../css/w/w1xy-_b1v.css';
import '../../css/w/wg57ytibm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y3dpzbtra"><path class="w1xy-_b1v"/><path class="wg57ytibm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:softball"} {...others} />);
}

export default Component;
