import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeedibbap.css';
import '../../css/q/qzrf2_c2c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aeedibbap"/><path class="qzrf2_c2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:spiral-notepad"} {...others} />);
}

export default Component;
