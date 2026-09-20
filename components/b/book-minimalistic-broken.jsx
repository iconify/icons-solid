import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rkviku0vk.css';
import '../../css/p/paayxvxde.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rkviku0vk"/><path class="paayxvxde"/><path class="lyw4o5ucl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-minimalistic-broken"} {...others} />);
}

export default Component;
