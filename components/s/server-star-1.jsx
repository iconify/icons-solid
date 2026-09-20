import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y5q9onb0a.css';
import '../../css/v/v-ytwpbde.css';
import '../../css/a/amklpt1ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y5q9onb0a"/><path class="v-ytwpbde"/><path class="amklpt1ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:server-star-1"} {...others} />);
}

export default Component;
