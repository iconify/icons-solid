import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_6l8gk2h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j_6l8gk2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sun-behind-large-cloud"} {...others} />);
}

export default Component;
