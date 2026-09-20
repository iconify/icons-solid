import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flbl-5mpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flbl-5mpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-6-fill"} {...others} />);
}

export default Component;
