import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj8g4n60a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj8g4n60a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:english-input"} {...others} />);
}

export default Component;
