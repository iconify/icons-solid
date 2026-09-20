import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew4z5r.css';
import '../../css/d/d-z279dq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew4z5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:weather-cloudy-loop"} {...others} />);
}

export default Component;
