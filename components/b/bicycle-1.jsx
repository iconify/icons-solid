import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jihl8sbdi.css';
import '../../css/q/qosv2bs_d.css';
import '../../css/s/szkgv3bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="jihl8sbdi"/><path class="qosv2bs_d"/><path class="szkgv3bwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bicycle-1"} {...others} />);
}

export default Component;
