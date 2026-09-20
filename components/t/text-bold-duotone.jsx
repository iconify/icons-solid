import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4e_esr8j.css';
import '../../css/k/kxwo0lbhm.css';
import '../../css/p/pj8n1ebvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d4e_esr8j"/><path class="kxwo0lbhm"/><path clip-rule="evenodd" class="pj8n1ebvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-bold-duotone"} {...others} />);
}

export default Component;
