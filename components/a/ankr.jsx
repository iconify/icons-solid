import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d9vk47bny.css';
import '../../css/d/dh96piwwy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="d9vk47bny"/><path class="dh96piwwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ankr"} {...others} />);
}

export default Component;
