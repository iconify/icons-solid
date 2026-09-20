import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-b60rb1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-b60rb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sprinkler-head"} {...others} />);
}

export default Component;
