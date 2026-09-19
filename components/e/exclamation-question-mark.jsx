import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwq5i-s2c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mwq5i-s2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:exclamation-question-mark"} {...others} />);
}

export default Component;
