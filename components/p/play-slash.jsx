import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2cbnacxb.css';
import '../../css/l/l5xs08b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x2cbnacxb"/><path class="l5xs08b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:play-slash"} {...others} />);
}

export default Component;
