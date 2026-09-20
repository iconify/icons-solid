import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/occ66bcrt.css';
import '../../css/a/avgno0bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="occ66bcrt"/><path clip-rule="evenodd" class="avgno0bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-ring2"} {...others} />);
}

export default Component;
