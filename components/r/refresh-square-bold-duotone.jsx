import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn_frcb-c.css';
import '../../css/g/gcj62obsa.css';
import '../../css/f/fwihx0b1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jn_frcb-c"/><path class="gcj62obsa"/><path class="fwihx0b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-square-bold-duotone"} {...others} />);
}

export default Component;
