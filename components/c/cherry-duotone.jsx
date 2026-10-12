import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pb9hvpzxz.css';
import '../../css/l/l_wmtobsh.css';
import '../../css/u/u3pnkz42x.css';
import '../../css/c/c39ja90-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pb9hvpzxz"/><path class="l_wmtobsh"/><path class="u3pnkz42x"/><path class="c39ja90-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cherry-duotone"} {...others} />);
}

export default Component;
