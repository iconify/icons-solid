import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/old3t75yt.css';
import '../../css/p/p6l7h54do.css';
import '../../css/u/u8qxa4wqg.css';
import '../../css/s/sl3627r-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="old3t75yt"/><path class="p6l7h54do"/><path class="u8qxa4wqg"/><path class="sl3627r-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:voice-typing-word-convert"} {...others} />);
}

export default Component;
