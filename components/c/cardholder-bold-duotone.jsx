import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/p/pdhevyb1i.css';
import '../../css/t/txy1lntoa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="pdhevyb1i"/><path class="txy1lntoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cardholder-bold-duotone"} {...others} />);
}

export default Component;
