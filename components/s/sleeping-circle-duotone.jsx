import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ysq6vib9v.css';
import '../../css/m/m4fqi-uul.css';
import '../../css/b/bzx3ijjsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ysq6vib9v"/><path clip-rule="evenodd" class="m4fqi-uul"/><path class="bzx3ijjsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sleeping-circle-duotone"} {...others} />);
}

export default Component;
