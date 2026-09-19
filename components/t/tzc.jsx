import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ycb6_gb0k.css';
import '../../css/l/lrid16b_i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ycb6_gb0k"/><path class="lrid16b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tzc"} {...others} />);
}

export default Component;
