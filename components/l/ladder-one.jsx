import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xsvx2acks.css';
import '../../css/b/bqu94pbno.css';
import '../../css/s/sfrpmyb4a.css';
import '../../css/l/lxd-viluj.css';
import '../../css/q/q3wrie1an.css';
import '../../css/e/edaht1g8p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xsvx2acks"/><path class="bqu94pbno"/><path class="sfrpmyb4a"/><path class="lxd-viluj"/><path class="q3wrie1an"/><path class="edaht1g8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ladder-one"} {...others} />);
}

export default Component;
