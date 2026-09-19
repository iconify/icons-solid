import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cslm94z5v.css';
import '../../css/i/is1vivbaq.css';
import '../../css/w/w1u9r841l.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 cslm94z5v"/><path class="clr-i-outline clr-i-outline-path-2 is1vivbaq"/><path class="clr-i-outline clr-i-outline-path-3 w1u9r841l"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:car-line"} {...others} />);
}

export default Component;
