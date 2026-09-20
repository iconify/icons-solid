import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x38wtfdlb.css';
import '../../css/g/g5yg_8b0m.css';
import '../../css/f/f1blexxfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x38wtfdlb"/><path class="g5yg_8b0m"/><path class="f1blexxfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link6-filled"} {...others} />);
}

export default Component;
