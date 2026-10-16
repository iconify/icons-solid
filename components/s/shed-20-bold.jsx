import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgedaabaz.css';
import '../../css/y/yfoxxnbix.css';
import '../../css/w/w4vjatb6b.css';
import '../../css/p/pjcct7b7l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hgedaabaz"/><path class="yfoxxnbix"/><path class="w4vjatb6b"/><path class="pjcct7b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shed-20-bold"} {...others} />);
}

export default Component;
