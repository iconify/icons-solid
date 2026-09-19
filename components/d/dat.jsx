import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/liefk1bya.css';
import '../../css/n/nwooszp6x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="liefk1bya"/><path class="nwooszp6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dat"} {...others} />);
}

export default Component;
