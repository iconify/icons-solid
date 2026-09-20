import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7qn6rb9l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u7qn6rb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:map-location-outline"} {...others} />);
}

export default Component;
