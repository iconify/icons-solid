import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wyie0wbyv.css';
import '../../css/p/pu4cdrdop.css';
import '../../css/d/dyl8igbkt.css';
import '../../css/z/zhunb4bab.css';
import '../../css/k/kw3e2tn8q.css';
import '../../css/z/z-tr15bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wyie0wbyv"/><path class="pu4cdrdop"/><path class="dyl8igbkt"/><path class="zhunb4bab"/><path class="kw3e2tn8q"/><path class="z-tr15bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:store"} {...others} />);
}

export default Component;
