import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmikg89ie.css';
import '../../css/o/or2xuacjy.css';
import '../../css/x/xh85adb6m.css';
import '../../css/i/idawvwsbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dmikg89ie"/><path class="or2xuacjy"/><path class="xh85adb6m"/><path class="idawvwsbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:electric-refueling-bold-duotone"} {...others} />);
}

export default Component;
