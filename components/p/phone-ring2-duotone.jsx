import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruptb2b7w.css';
import '../../css/g/g93bdwbpy.css';
import '../../css/j/jfquk0ace.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ruptb2b7w"/><path class="g93bdwbpy"/><path clip-rule="evenodd" class="jfquk0ace"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:phone-ring2-duotone"} {...others} />);
}

export default Component;
