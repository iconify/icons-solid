import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1x5o90gz.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="q1x5o90gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:piggy-bank"} {...others} />);
}

export default Component;
