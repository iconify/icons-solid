import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0-xpbb2b.css';
import '../../css/d/d6xrfdbqy.css';
import '../../css/k/kh3h7ac0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v0-xpbb2b"/><path class="d6xrfdbqy"/><path class="kh3h7ac0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:parking-meter-duotone"} {...others} />);
}

export default Component;
