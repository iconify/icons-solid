import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q798o54jm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q798o54jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:weather-cloudy"} {...others} />);
}

export default Component;
