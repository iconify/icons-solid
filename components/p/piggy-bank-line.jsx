import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2hyyzu0p.css';
import '../../css/o/o83obdmlu.css';
import '../../css/x/x1wgfmbaz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 h2hyyzu0p"/><circle class="clr-i-outline clr-i-outline-path-2 o83obdmlu"/><path class="clr-i-outline clr-i-outline-path-3 x1wgfmbaz"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:piggy-bank-line"} {...others} />);
}

export default Component;
