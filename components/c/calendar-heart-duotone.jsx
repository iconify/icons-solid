import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjyby6o7j.css';
import '../../css/p/p3poopb-f.css';
import '../../css/d/d_8ct9emv.css';
import '../../css/v/vv4r3nbqi.css';
import '../../css/u/u72utlerl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pjyby6o7j"/><path class="p3poopb-f"/><path class="d_8ct9emv"/><path class="vv4r3nbqi"/><path class="u72utlerl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-heart-duotone"} {...others} />);
}

export default Component;
