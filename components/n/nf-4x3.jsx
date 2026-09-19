import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xocoj9bjf.css';
import '../../css/o/o_uut_b7r.css';
import '../../css/e/emicf7wbv.css';
import '../../css/d/dmqy1en3m.css';
import '../../css/d/dqik646nn.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="xocoj9bjf"/><path class="o_uut_b7r"/><path class="emicf7wbv"/><path class="dmqy1en3m"/><path class="dqik646nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nf-4x3"} {...others} />);
}

export default Component;
