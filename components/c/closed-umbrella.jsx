import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kpro9k91s.css';
import '../../css/n/ne191kv5g.css';
import '../../css/y/yb6rtrrbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kpro9k91s"/><path class="ne191kv5g"/><path class="yb6rtrrbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:closed-umbrella"} {...others} />);
}

export default Component;
