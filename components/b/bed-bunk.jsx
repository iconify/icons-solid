import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pvv0wjm6y.css';
import '../../css/v/va_vw-bdu.css';
import '../../css/w/wy9fi2lpj.css';
import '../../css/v/vm3lttbci.css';
import '../../css/w/wxye21bxf.css';
import '../../css/v/vgtab-llh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pvv0wjm6y"/><path class="va_vw-bdu"/><path class="wy9fi2lpj"/><path class="vm3lttbci"/><path class="wxye21bxf"/><path class="vgtab-llh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bed-bunk"} {...others} />);
}

export default Component;
