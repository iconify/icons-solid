import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhegjbgei.css';
import '../../css/c/cm2goxb8k.css';
import '../../css/r/rkhkfhe6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jhegjbgei"/><path clip-rule="evenodd" class="cm2goxb8k"/><path clip-rule="evenodd" class="rkhkfhe6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diabetes-measure-24px"} {...others} />);
}

export default Component;
