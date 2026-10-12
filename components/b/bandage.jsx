import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xf28il4io.css';
import '../../css/m/m1ayfna5l.css';
import '../../css/w/wyfa9nbbu.css';
import '../../css/z/z7nwzw02a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(45 12.17 4.08)" class="xf28il4io"/><rect transform="rotate(45 15.64 .6)" class="m1ayfna5l"/><path class="wyfa9nbbu"/><path class="z7nwzw02a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bandage"} {...others} />);
}

export default Component;
