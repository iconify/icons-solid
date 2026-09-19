import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4e5ivbbk.css';
import '../../css/i/ik2agtbvx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="j4e5ivbbk"/><path class="ik2agtbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:rcn"} {...others} />);
}

export default Component;
