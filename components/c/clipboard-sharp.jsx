import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_c9h_pwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_c9h_pwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:clipboard-sharp"} {...others} />);
}

export default Component;
