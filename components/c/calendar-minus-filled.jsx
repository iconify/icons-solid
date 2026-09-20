import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-8o32bcf.css';
import '../../css/h/h_nd1wbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h-8o32bcf"/><path clip-rule="evenodd" class="h_nd1wbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-minus-filled"} {...others} />);
}

export default Component;
