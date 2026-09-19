import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz6gwxb-r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jz6gwxb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:high-speed-train"} {...others} />);
}

export default Component;
