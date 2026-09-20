import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/omev82_0l.css';
import '../../css/l/llj24fb0y.css';
import '../../css/d/d6vf8qwwc.css';
import '../../css/r/ru4j6us0s.css';
import '../../css/d/dllipbcpo.css';
import '../../css/l/l4p1e6bob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="omev82_0l"/><path class="llj24fb0y"/><path class="d6vf8qwwc"/><path class="ru4j6us0s"/><path class="dllipbcpo"/><path class="l4p1e6bob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:presentation"} {...others} />);
}

export default Component;
