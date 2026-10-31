import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sruwfs7vy.css';
import '../../css/c/cc0imbc9c.css';
import '../../css/r/r-e4ysykg.css';
import '../../css/b/btqp048vo.css';
import '../../css/i/iobizabzl.css';
import '../../css/t/ti34zy_zb.css';
import '../../css/z/z5kpatvis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sruwfs7vy wm-shadow"/><path class="cc0imbc9c"/><path class="r-e4ysykg"/><path class="btqp048vo"/><path class="iobizabzl"/><path class="ti34zy_zb"/><path class="wm-s z5kpatvis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:smartphone-charging"} {...others} />);
}

export default Component;
