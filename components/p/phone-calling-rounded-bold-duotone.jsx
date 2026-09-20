import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j91-b1bhj.css';
import '../../css/c/cfifa2ueo.css';
import '../../css/h/hub4u5b3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j91-b1bhj"/><path class="cfifa2ueo"/><path clip-rule="evenodd" class="hub4u5b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-bold-duotone"} {...others} />);
}

export default Component;
