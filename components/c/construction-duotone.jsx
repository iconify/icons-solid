import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b71b9peon.css';
import '../../css/a/ayobaex1b.css';
import '../../css/v/vu2bvn-_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b71b9peon"/><path class="ayobaex1b"/><path class="vu2bvn-_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:construction-duotone"} {...others} />);
}

export default Component;
