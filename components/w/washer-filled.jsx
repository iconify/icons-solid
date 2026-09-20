import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug_skfbsy.css';
import '../../css/f/fwknfdbgo.css';
import '../../css/l/ledwm5bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ug_skfbsy"/><path class="fwknfdbgo"/><path clip-rule="evenodd" class="ledwm5bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:washer-filled"} {...others} />);
}

export default Component;
