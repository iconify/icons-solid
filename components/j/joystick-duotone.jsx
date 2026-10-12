import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5i-6tbql.css';
import '../../css/h/hs2z7ejyy.css';
import '../../css/o/ob8610b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i5i-6tbql"/><path class="hs2z7ejyy"/><path class="ob8610b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:joystick-duotone"} {...others} />);
}

export default Component;
