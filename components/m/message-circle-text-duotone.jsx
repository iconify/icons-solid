import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux9cb8bsw.css';
import '../../css/y/yo4cusbpd.css';
import '../../css/l/ldaeqpbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ux9cb8bsw"/><path class="yo4cusbpd"/><path class="ldaeqpbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-circle-text-duotone"} {...others} />);
}

export default Component;
