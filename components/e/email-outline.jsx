import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rof48-bhz.css';
import '../../css/v/vvhi0fomh.css';
import '../../css/g/gp0egaclj.css';
import '../../css/p/pvn_t0-wo.css';
import '../../css/s/se9xdnbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="rof48-bhz"/><path class="vvhi0fomh"/><circle class="gp0egaclj"/><path class="pvn_t0-wo"/><path class="se9xdnbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:email-outline"} {...others} />);
}

export default Component;
