import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r06h_3ljo.css';
import '../../css/b/b24f5vk0n.css';
import '../../css/v/vznjcc47g.css';
import '../../css/p/piipinbcz.css';
import '../../css/k/kkehyzd5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r06h_3ljo"/><path class="b24f5vk0n"/><path class="vznjcc47g"/><path class="piipinbcz"/><path class="kkehyzd5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-linear"} {...others} />);
}

export default Component;
