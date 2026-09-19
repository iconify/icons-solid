import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bky_spooe.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="bky_spooe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:arrowright"} {...others} />);
}

export default Component;
