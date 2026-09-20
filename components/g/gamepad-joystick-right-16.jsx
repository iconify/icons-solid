import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk09y49yr.css';
import '../../css/y/yvlpmubcp.css';
import '../../css/b/bw4bmeb4v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kk09y49yr"/><path clip-rule="evenodd" class="yvlpmubcp"/><path class="bw4bmeb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-joystick-right-16"} {...others} />);
}

export default Component;
