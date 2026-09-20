import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5r16bcmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5r16bcmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swiparr-dark"} {...others} />);
}

export default Component;
