import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k85dh-b-g.css';
import '../../css/r/r8bzvdbhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k85dh-b-g"/><path class="r8bzvdbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-bugs"} {...others} />);
}

export default Component;
