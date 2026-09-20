import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kg2ciqbpk.css';
import '../../css/k/k517x8b0k.css';
import '../../css/s/skrehrb6b.css';
import '../../css/e/e5_8lc4-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kg2ciqbpk"/><path class="k517x8b0k"/><path class="skrehrb6b"/><path class="e5_8lc4-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:battery-medium-3"} {...others} />);
}

export default Component;
