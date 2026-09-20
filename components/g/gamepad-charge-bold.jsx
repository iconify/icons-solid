import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il5wbr13b.css';
import '../../css/d/dkb17ryis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="il5wbr13b"/><path clip-rule="evenodd" class="dkb17ryis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-charge-bold"} {...others} />);
}

export default Component;
