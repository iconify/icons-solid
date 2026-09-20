import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s19vr9ebe.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s19vr9ebe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:broken-link-2"} {...others} />);
}

export default Component;
