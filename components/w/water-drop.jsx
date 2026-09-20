import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/plsbgcb9p.css';
import '../../css/s/sy77_e04s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="plsbgcb9p"/><path class="sy77_e04s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:water-drop"} {...others} />);
}

export default Component;
