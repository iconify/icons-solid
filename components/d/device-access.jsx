import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/itgtwu-3t.css';
import '../../css/z/z7ido4o6s.css';
import '../../css/f/f7lvwj05b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="itgtwu-3t"/><path class="z7ido4o6s"/><path class="f7lvwj05b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:device-access"} {...others} />);
}

export default Component;
