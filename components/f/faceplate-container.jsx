import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8dsq4bdr.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="n8dsq4bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:faceplate-container"} {...others} />);
}

export default Component;
