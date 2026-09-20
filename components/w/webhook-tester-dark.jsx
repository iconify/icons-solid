import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwv2rb7dk.css';
import '../../css/e/ejz03ub5z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwv2rb7dk"/><path class="ejz03ub5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:webhook-tester-dark"} {...others} />);
}

export default Component;
