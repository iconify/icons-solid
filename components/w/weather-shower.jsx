import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwb7nl58g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwb7nl58g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:weather-shower"} {...others} />);
}

export default Component;
