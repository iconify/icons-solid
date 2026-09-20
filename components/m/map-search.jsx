import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/on7w3rb0g.css';
import '../../css/p/pw0x2ebwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="on7w3rb0g"/><path class="pw0x2ebwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:map-search"} {...others} />);
}

export default Component;
