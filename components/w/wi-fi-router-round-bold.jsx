import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9pm6-j4k.css';
import '../../css/y/yepfcjb2n.css';
import '../../css/y/ym5h4t9sc.css';
import '../../css/q/q2ovdihlu.css';
import '../../css/n/ni_65ybtq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9pm6-j4k"/><path class="yepfcjb2n"/><path class="ym5h4t9sc"/><path class="q2ovdihlu"/><path clip-rule="evenodd" class="ni_65ybtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-round-bold"} {...others} />);
}

export default Component;
