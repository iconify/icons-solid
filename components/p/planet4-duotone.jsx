import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdk03xjzw.css';
import '../../css/u/u4ubiccdj.css';
import '../../css/t/ts6026b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rdk03xjzw"/><path class="u4ubiccdj"/><path class="ts6026b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:planet4-duotone"} {...others} />);
}

export default Component;
