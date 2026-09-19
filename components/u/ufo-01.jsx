import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v70i-h9qh.css';
import '../../css/h/hvtj75jxc.css';
import '../../css/d/d72yro0mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v70i-h9qh"/><path class="hvtj75jxc"/><path class="d72yro0mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ufo-01"} {...others} />);
}

export default Component;
