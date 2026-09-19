import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u608r_euu.css';
import '../../css/l/l5xno5tzc.css';
import '../../css/b/b54bhv41g.css';
import '../../css/w/wftjatb3x.css';
import '../../css/p/p8xk52btg.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 u608r_euu"/><path class="clr-i-outline clr-i-outline-path-2 l5xno5tzc"/><path class="b54bhv41g clr-i-outline clr-i-outline-path-3"/><path class="clr-i-outline clr-i-outline-path-4 wftjatb3x"/><path class="clr-i-outline clr-i-outline-path-5 p8xk52btg"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:event-line"} {...others} />);
}

export default Component;
