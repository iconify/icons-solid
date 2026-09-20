import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga2q64z-s.css';
import '../../css/w/wb6erxftq.css';
import '../../css/h/h-gcrrbsm.css';
import '../../css/c/c3me1jime.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ga2q64z-s"/><path class="wb6erxftq"/><path class="h-gcrrbsm"/><path class="c3me1jime"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:home-2"} {...others} />);
}

export default Component;
