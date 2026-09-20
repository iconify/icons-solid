import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iidofy_mo.css';
import '../../css/v/vl-yuhble.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iidofy_mo"/><path class="vl-yuhble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:radio"} {...others} />);
}

export default Component;
