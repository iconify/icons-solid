import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et59vtbnu.css';
import '../../css/q/qazb7jbeb.css';
import '../../css/k/kkhl62fff.css';
import '../../css/o/o-v99zb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="et59vtbnu"/><path class="qazb7jbeb"/><path class="kkhl62fff"/><path class="o-v99zb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
