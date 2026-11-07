import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oso782buv.css';
import '../../css/i/ik4h_zthb.css';
import '../../css/l/lwh3p0k8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oso782buv"/><path class="ik4h_zthb"/><path class="lwh3p0k8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-bold-duotone"} {...others} />);
}

export default Component;
