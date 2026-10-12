import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxe1cpbak.css';
import '../../css/z/zq20o_lec.css';
import '../../css/e/ex-x_5bvm.css';
import '../../css/v/vhi0hdc0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zxe1cpbak"/><path class="zq20o_lec"/><path class="ex-x_5bvm"/><path class="vhi0hdc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hospital-duotone"} {...others} />);
}

export default Component;
