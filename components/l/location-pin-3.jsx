import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v5omh1z8k.css';
import '../../css/x/xr5bdmbjj.css';
import '../../css/c/cjh_d4npv.css';
import '../../css/y/y-zp08b9i.css';
import '../../css/y/y1l4swsnq.css';
import '../../css/j/jbf9-vm-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v5omh1z8k"/><path class="xr5bdmbjj"/><path class="cjh_d4npv"/><path class="y-zp08b9i"/><path class="y1l4swsnq"/><path class="jbf9-vm-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:location-pin-3"} {...others} />);
}

export default Component;
