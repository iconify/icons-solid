import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi9tzv3au.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wi9tzv3au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:logstash-filter"} {...others} />);
}

export default Component;
