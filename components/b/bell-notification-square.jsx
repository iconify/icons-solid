import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vj567d7up.css';
import '../../css/m/mcojq7b_o.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="vj567d7up"/><path class="mcojq7b_o"/><rect class="z7h9dmbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bell-notification-square"} {...others} />);
}

export default Component;
