import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi4-631ad.css';
import '../../css/a/adnmr7cpp.css';
import '../../css/u/uixwofb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pi4-631ad"/><path clip-rule="evenodd" class="adnmr7cpp"/><path class="uixwofb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-6-duotone"} {...others} />);
}

export default Component;
