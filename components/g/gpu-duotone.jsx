import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3gj0l26m.css';
import '../../css/u/uejy3gf8k.css';
import '../../css/p/pi_2brphp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n3gj0l26m"/><path class="uejy3gf8k"/><path clip-rule="evenodd" class="pi_2brphp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gpu-duotone"} {...others} />);
}

export default Component;
