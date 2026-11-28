import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r1j4lk9ap.css';
import '../../css/c/clku-lbrt.css';
import '../../css/s/srnt8ebvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r1j4lk9ap"/><circle class="clku-lbrt"/><path class="srnt8ebvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:joystick"} {...others} />);
}

export default Component;
