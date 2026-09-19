import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii0e4j_mh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ii0e4j_mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:satellite-antenna"} {...others} />);
}

export default Component;
