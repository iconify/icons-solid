import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/agpgk5s6s.css';
import '../../css/c/ceczstbrz.css';
import '../../css/t/t1f8c32xf.css';
import '../../css/s/sd19jvbvo.css';
import '../../css/b/bkq0qtv2r.css';
import '../../css/o/o24xax7un.css';
import '../../css/w/w5cn7xlse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="agpgk5s6s"/><path class="ceczstbrz"/><path class="t1f8c32xf"/><path class="sd19jvbvo"/><path class="bkq0qtv2r"/><path class="o24xax7un"/><path class="w5cn7xlse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-2-linear"} {...others} />);
}

export default Component;
