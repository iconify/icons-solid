import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiyst2b8b.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="wiyst2b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:file-code"} {...others} />);
}

export default Component;
