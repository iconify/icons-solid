import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo8j5ccno.css';
import '../../css/h/hqf4buevt.css';
import '../../css/x/xp5m09b0z.css';
import '../../css/o/ootr88fth.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 vo8j5ccno"/><path class="clr-i-outline clr-i-outline-path-2 hqf4buevt"/><path class="clr-i-outline clr-i-outline-path-3 xp5m09b0z"/><path class="clr-i-outline clr-i-outline-path-4 ootr88fth"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:copy-to-clipboard-line"} {...others} />);
}

export default Component;
