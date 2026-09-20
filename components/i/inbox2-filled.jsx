import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/d/dy5yiabwz.css';
import '../../css/z/z0y52ppep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gsx79b0zp"/><path clip-rule="evenodd" class="dy5yiabwz"/><path clip-rule="evenodd" class="z0y52ppep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:inbox2-filled"} {...others} />);
}

export default Component;
