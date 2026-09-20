import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgi_x_bsy.css';
import '../../css/v/vv-zg3n3h.css';
import '../../css/m/m5p-3qd4a.css';
import '../../css/p/pwdekvbfn.css';
import '../../css/i/ik3a81xhf.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/q812qi0em.css';
import '../../css/e/ey-8tjbfb.css';
import '../../css/o/ozpln0mbq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zgi_x_bsy"/><path class="vv-zg3n3h"/><path class="m5p-3qd4a"/><path class="pwdekvbfn"/><path class="ik3a81xhf"/><g class="z04drlb1l"><path class="q812qi0em"/><path class="ey-8tjbfb"/><path class="ozpln0mbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:electric-plug"} {...others} />);
}

export default Component;
