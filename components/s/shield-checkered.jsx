import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iezb6eb_v.css';
import '../../css/n/n9eijwbwv.css';
import '../../css/z/zbgn4_-_c.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iezb6eb_v"/><path class="n9eijwbwv"/><path class="zbgn4_-_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:shield-checkered"} {...others} />);
}

export default Component;
