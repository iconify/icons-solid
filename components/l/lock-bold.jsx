import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r99g0fbpd.css';
import '../../css/v/vynp5dscc.css';
import '../../css/t/t2u_xdb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="r99g0fbpd"/><path class="vynp5dscc"/><path class="t2u_xdb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:lock-bold"} {...others} />);
}

export default Component;
