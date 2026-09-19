import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a8nbixmrq.css';
import '../../css/c/cqu3f88yd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="a8nbixmrq"/><path class="cqu3f88yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:elf"} {...others} />);
}

export default Component;
