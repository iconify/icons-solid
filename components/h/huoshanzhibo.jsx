import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2112k_vg.css';
import '../../css/y/y2nmqhmom.css';
import '../../css/g/gdrmk4bfv.css';
import '../../css/s/smfv_omyd.css';
import '../../css/y/yrwibac8x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r2112k_vg"/><path class="y2nmqhmom"/><path class="gdrmk4bfv"/><path class="smfv_omyd"/><path class="yrwibac8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:huoshanzhibo"} {...others} />);
}

export default Component;
