import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ide3bkb9l.css';
import '../../css/t/tmtp8bc7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ide3bkb9l"/><path class="tmtp8bc7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-cross"} {...others} />);
}

export default Component;
