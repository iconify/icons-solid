import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn0n5kbor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn0n5kbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:disconnected-circle-filled"} {...others} />);
}

export default Component;
