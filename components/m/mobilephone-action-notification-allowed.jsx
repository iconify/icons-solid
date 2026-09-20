import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nrhq9wbem.css';
import '../../css/g/goloxm9_l.css';
import '../../css/w/w_b4t0bzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nrhq9wbem"/><path class="goloxm9_l"/><path class="w_b4t0bzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobilephone-action-notification-allowed"} {...others} />);
}

export default Component;
