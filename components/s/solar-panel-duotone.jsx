import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b586-pbxl.css';
import '../../css/k/kkpssnb2s.css';
import '../../css/f/fnw9pc43f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b586-pbxl"/><path class="kkpssnb2s"/><path class="fnw9pc43f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:solar-panel-duotone"} {...others} />);
}

export default Component;
