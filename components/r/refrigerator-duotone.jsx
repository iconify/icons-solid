import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwf3rkznn.css';
import '../../css/n/n2z95934v.css';
import '../../css/l/l6vkg_oos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jwf3rkznn"/><path class="n2z95934v"/><path class="l6vkg_oos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:refrigerator-duotone"} {...others} />);
}

export default Component;
