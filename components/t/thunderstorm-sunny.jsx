import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9oijwbuz.css';
import '../../css/t/t6e_qg8qr.css';
import '../../css/l/lu3gphbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k9oijwbuz"/><path class="t6e_qg8qr"/><path class="lu3gphbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:thunderstorm-sunny"} {...others} />);
}

export default Component;
