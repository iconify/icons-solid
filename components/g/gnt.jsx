import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dogqpyixk.css';
import '../../css/v/vh4_9xtzu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dogqpyixk"/><path class="vh4_9xtzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gnt"} {...others} />);
}

export default Component;
