import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er9_2_bjd.css';
import '../../css/v/vg928d-qd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er9_2_bjd"/><path class="vg928d-qd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dot-bold-duotone"} {...others} />);
}

export default Component;
