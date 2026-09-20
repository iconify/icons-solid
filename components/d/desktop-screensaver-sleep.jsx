import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sye-tcbbz.css';
import '../../css/g/gwobaib4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sye-tcbbz"/><path class="gwobaib4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:desktop-screensaver-sleep"} {...others} />);
}

export default Component;
