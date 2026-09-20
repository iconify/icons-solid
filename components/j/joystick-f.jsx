import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v56jcj3_g.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="v56jcj3_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:joystick-f"} {...others} />);
}

export default Component;
