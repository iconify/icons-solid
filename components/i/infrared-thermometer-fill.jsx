import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fab1iab3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fab1iab3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:infrared-thermometer-fill"} {...others} />);
}

export default Component;
