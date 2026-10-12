import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wep1khr3x.css';
import '../../css/t/t__lwvbuc.css';
import '../../css/q/qt2xe75xs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wep1khr3x"/><path class="t__lwvbuc"/><path class="qt2xe75xs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:leafy-green-duotone"} {...others} />);
}

export default Component;
