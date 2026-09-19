import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-6w0qb7o.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="n-6w0qb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:videocam-circle"} {...others} />);
}

export default Component;
