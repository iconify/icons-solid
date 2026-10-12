import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8qdoms0h.css';
import '../../css/l/lmmrxwb9j.css';
import '../../css/e/e1hj2ybxs.css';
import '../../css/k/kewqfdbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g8qdoms0h"/><path class="lmmrxwb9j"/><path class="e1hj2ybxs"/><path class="kewqfdbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-lock-duotone"} {...others} />);
}

export default Component;
