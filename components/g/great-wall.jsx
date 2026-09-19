import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/ru1td3bzv.css';
import '../../css/c/cnmqsablm.css';
import '../../css/l/lcr-0gr_n.css';
import '../../css/d/dudxz7bof.css';
import '../../css/n/nbxp7vx8d.css';
import '../../css/n/nzvis7bja.css';
import '../../css/l/lymiklb6c.css';
import '../../css/l/la39dg7xj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ru1td3bzv"/><path class="cnmqsablm"/><path class="lcr-0gr_n"/><path class="dudxz7bof"/><path class="nbxp7vx8d"/><path class="nzvis7bja"/><path class="lymiklb6c"/><path class="la39dg7xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:great-wall"} {...others} />);
}

export default Component;
