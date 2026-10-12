import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adwzh7blz.css';
import '../../css/o/oaeva_b0f.css';
import '../../css/t/t10a2509h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="adwzh7blz"/><path class="oaeva_b0f"/><path class="t10a2509h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bug-duotone"} {...others} />);
}

export default Component;
