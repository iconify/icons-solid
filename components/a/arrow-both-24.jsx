import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhn8gh6nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhn8gh6nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:arrow-both-24"} {...others} />);
}

export default Component;
