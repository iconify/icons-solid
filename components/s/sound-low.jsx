import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ax1ugg9xx.css';
import '../../css/p/pk5c11biu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ax1ugg9xx"/><path class="pk5c11biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sound-low"} {...others} />);
}

export default Component;
