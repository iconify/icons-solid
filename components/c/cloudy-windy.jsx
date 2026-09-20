import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngkdydb1g.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ngkdydb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:cloudy-windy"} {...others} />);
}

export default Component;
