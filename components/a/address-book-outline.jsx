import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u79qfhp1l.css';
import '../../css/w/womghjzhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="u79qfhp1l"/><path clip-rule="evenodd" class="womghjzhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:address-book-outline"} {...others} />);
}

export default Component;
