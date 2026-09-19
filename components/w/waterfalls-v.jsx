import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/s/sj776bbep.css';
import '../../css/x/xk12v3uld.css';
import '../../css/q/q5cjalbcb.css';
import '../../css/p/pd2c0_bqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="sj776bbep"/><path class="xk12v3uld"/><path class="q5cjalbcb"/><path class="pd2c0_bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waterfalls-v"} {...others} />);
}

export default Component;
