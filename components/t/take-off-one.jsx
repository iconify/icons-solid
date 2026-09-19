import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iqr7dvb-s.css';
import '../../css/q/qq-___vax.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="iqr7dvb-s"/><path class="qq-___vax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:take-off-one"} {...others} />);
}

export default Component;
