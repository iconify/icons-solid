import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/us59zbc6y.css';
import '../../css/i/icn5nobxp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="us59zbc6y"/><path class="icn5nobxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nxt"} {...others} />);
}

export default Component;
