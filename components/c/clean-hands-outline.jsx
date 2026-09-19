import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz_q5um7a.css';
import '../../css/g/ge5wqcccf.css';
import '../../css/q/qs--2tbzr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oz_q5um7a"/><path class="ge5wqcccf"/><path clip-rule="evenodd" class="qs--2tbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:clean-hands-outline"} {...others} />);
}

export default Component;
