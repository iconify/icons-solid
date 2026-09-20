import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvoecyb6c.css';
import '../../css/m/mhxymalnj.css';
import '../../css/t/teg2gbcuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lvoecyb6c"/><path class="mhxymalnj"/><path class="teg2gbcuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:masks-duotone"} {...others} />);
}

export default Component;
