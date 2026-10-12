import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_ltqvfxc.css';
import '../../css/k/ktey3n4hx.css';
import '../../css/f/frm1azcsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_ltqvfxc"/><path class="ktey3n4hx"/><path class="frm1azcsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:laptop-duotone"} {...others} />);
}

export default Component;
