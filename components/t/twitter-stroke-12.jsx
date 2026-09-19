import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfk4xd31m.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wfk4xd31m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:twitter-stroke-12"} {...others} />);
}

export default Component;
