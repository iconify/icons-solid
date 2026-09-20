import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zhr7jvb_f.css';
import '../../css/t/ta1rbzbiw.css';
import '../../css/w/wtzqv5bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zhr7jvb_f"/><path class="ta1rbzbiw"/><path class="wtzqv5bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bed-duotone"} {...others} />);
}

export default Component;
