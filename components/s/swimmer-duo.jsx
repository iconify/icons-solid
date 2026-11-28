import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaojgdcku.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pwyacq_9t.css';
import '../../css/l/lbixp3wyq.css';
import '../../css/p/pb--brbnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kaojgdcku secondary"/><g class="dt0cm9dhy primary"><path class="pwyacq_9t"/><path class="lbixp3wyq"/><path class="pb--brbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:swimmer-duo"} {...others} />);
}

export default Component;
