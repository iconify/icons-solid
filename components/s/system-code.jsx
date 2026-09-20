import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwv72-otp.css';
import '../../css/b/bxmmgkbip.css';
import '../../css/e/eh41eabls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fwv72-otp"/><path class="bxmmgkbip"/><path class="eh41eabls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-code"} {...others} />);
}

export default Component;
