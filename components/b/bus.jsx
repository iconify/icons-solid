import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_6nlzbtv.css';
import '../../css/l/l-hm_u4_z.css';
import '../../css/g/g7egqccih.css';
import '../../css/q/qig_zznph.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r_6nlzbtv"/><path class="l-hm_u4_z"/><path class="g7egqccih"/><path class="qig_zznph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bus"} {...others} />);
}

export default Component;
