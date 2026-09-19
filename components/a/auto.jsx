import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xxwterbon.css';
import '../../css/d/dc1gt4bec.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xxwterbon"/><path class="dc1gt4bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:auto"} {...others} />);
}

export default Component;
