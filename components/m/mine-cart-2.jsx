import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/p6kbvpbcp.css';
import '../../css/q/q30v3zb4k.css';
import '../../css/m/mkr00buly.css';
import '../../css/z/ziph1wdel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="p6kbvpbcp"/><path class="q30v3zb4k"/><path class="mkr00buly"/><path class="ziph1wdel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mine-cart-2"} {...others} />);
}

export default Component;
