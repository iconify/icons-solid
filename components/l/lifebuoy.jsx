import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou2dp-ouw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ou2dp-ouw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lifebuoy"} {...others} />);
}

export default Component;
