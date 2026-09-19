import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn0-01bqi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xn0-01bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:closed-umbrella"} {...others} />);
}

export default Component;
