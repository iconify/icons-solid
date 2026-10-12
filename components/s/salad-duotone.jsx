import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vd48b6b9j.css';
import '../../css/l/llzh89b2x.css';
import '../../css/w/wus91yb_f.css';
import '../../css/b/b05jt-2ie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vd48b6b9j"/><path class="llzh89b2x"/><path class="wus91yb_f"/><path class="b05jt-2ie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:salad-duotone"} {...others} />);
}

export default Component;
