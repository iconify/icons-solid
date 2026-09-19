import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/my-5asbjr.css';
import '../../css/o/ok3e3abke.css';
import '../../css/u/uq8b2tbpe.css';
import '../../css/s/swqwzcboj.css';
import '../../css/t/tg047nvvq.css';
import '../../css/q/qkait9bti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="my-5asbjr"/><path class="ok3e3abke"/><path class="uq8b2tbpe"/><path class="swqwzcboj"/><path class="tg047nvvq"/><path class="qkait9bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:headset-two"} {...others} />);
}

export default Component;
