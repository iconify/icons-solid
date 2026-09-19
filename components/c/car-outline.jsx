import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy2zf99lb.css';
import '../../css/t/tf5xj-bsz.css';
import '../../css/k/koofvxt_e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fy2zf99lb"/><circle class="tf5xj-bsz"/><circle class="koofvxt_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:car-outline"} {...others} />);
}

export default Component;
