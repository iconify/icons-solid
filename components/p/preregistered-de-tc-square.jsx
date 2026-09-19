import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmw0aqb3a.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="wmw0aqb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:preregistered-de-tc-square"} {...others} />);
}

export default Component;
