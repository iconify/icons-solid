import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5-8z9xxl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q5-8z9xxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:clinking-glasses"} {...others} />);
}

export default Component;
