import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pihw0xj_y.css';
import '../../css/r/r0scy3bob.css';
import '../../css/w/wtvptr35v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pihw0xj_y"/><path class="r0scy3bob"/><path class="wtvptr35v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tablet-duotone"} {...others} />);
}

export default Component;
