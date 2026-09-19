import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi284xblo.css';
import '../../css/r/rl9nm6b5b.css';
import '../../css/j/j3g_okd9a.css';
import '../../css/s/s7hiajbok.css';
import '../../css/r/rryepq1cz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fi284xblo"/><path class="rl9nm6b5b"/><path class="j3g_okd9a"/><path class="s7hiajbok"/><path class="rryepq1cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:frog"} {...others} />);
}

export default Component;
