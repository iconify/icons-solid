import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bybr2q82h.css';
import '../../css/t/t34te5bfi.css';
import '../../css/g/gw45uub7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bybr2q82h"/><path class="t34te5bfi"/><path class="gw45uub7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-badge"} {...others} />);
}

export default Component;
