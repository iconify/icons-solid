import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfm5imxge.css';
import '../../css/i/i27ssqklb.css';
import '../../css/c/ce5djubef.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rfm5imxge"/><path class="i27ssqklb"/><path class="ce5djubef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:trash-sharp"} {...others} />);
}

export default Component;
