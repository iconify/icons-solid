import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv9m28o7q.css';
import '../../css/v/vhaukhplh.css';
import '../../css/z/zdprtrzhm.css';
import '../../css/k/k4u_8_b9j.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 fv9m28o7q"/><path class="clr-i-outline clr-i-outline-path-2 vhaukhplh"/><path class="clr-i-outline clr-i-outline-path-3 zdprtrzhm"/><path class="clr-i-outline clr-i-outline-path-4 k4u_8_b9j"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:new-line"} {...others} />);
}

export default Component;
