import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5gnv6y7i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n5gnv6y7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:issue-draft"} {...others} />);
}

export default Component;
