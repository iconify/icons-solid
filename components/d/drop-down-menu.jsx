import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d74elo59o.css';
import '../../css/v/vqv9-lbol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d74elo59o"/><path class="vqv9-lbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:drop-down-menu"} {...others} />);
}

export default Component;
