import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws_09-r4i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qlgb7obud.css';
import '../../css/x/xkvh3zbun.css';
import '../../css/a/arpbdxppp.css';
import '../../css/u/u_lf31tge.css';
import '../../css/p/p7gyhn5hv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ws_09-r4i"/><g class="dt0cm9dhy primary"><path class="qlgb7obud"/><path class="xkvh3zbun"/><path class="arpbdxppp"/><path class="u_lf31tge"/><path class="p7gyhn5hv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:currency-duo"} {...others} />);
}

export default Component;
