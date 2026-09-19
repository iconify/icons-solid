import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc0c_gq-d.css';
import '../../css/s/sx0qtzbwt.css';
import '../../css/l/l5a55bckk.css';
import '../../css/n/nspmw7h7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cc0c_gq-d"/><path class="sx0qtzbwt"/><path class="l5a55bckk"/><path class="nspmw7h7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hampster"} {...others} />);
}

export default Component;
