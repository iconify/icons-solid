import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/z3xoy4bjr.css';
import '../../css/j/jd-d11b4r.css';
import '../../css/s/s5ws2fbpw.css';
import '../../css/a/a8vkd368h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="z3xoy4bjr"/><path class="jd-d11b4r"/><path class="s5ws2fbpw"/><path class="a8vkd368h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:screen-tv"} {...others} />);
}

export default Component;
