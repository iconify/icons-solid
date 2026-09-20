import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7sqs6fyf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y7sqs6fyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onskeskyen-dark"} {...others} />);
}

export default Component;
