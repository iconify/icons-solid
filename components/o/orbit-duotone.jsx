import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyo09ve5h.css';
import '../../css/j/jyuddqs9y.css';
import '../../css/i/iat-fdaxx.css';
import '../../css/k/k5uczl3ks.css';
import '../../css/b/bet4yfb4x.css';
import '../../css/y/y8oulbboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dyo09ve5h"/><path class="jyuddqs9y"/><path class="iat-fdaxx"/><path class="k5uczl3ks"/><path class="bet4yfb4x"/><path class="y8oulbboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:orbit-duotone"} {...others} />);
}

export default Component;
