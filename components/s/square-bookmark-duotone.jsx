import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh68e-fxv.css';
import '../../css/b/bgakwib_u.css';
import '../../css/s/s1a2eew1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oh68e-fxv"/><path class="bgakwib_u"/><path class="s1a2eew1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-bookmark-duotone"} {...others} />);
}

export default Component;
