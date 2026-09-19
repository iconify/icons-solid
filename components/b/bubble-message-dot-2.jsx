import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctp10hf8t.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="ctp10hf8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:bubble-message-dot-2"} {...others} />);
}

export default Component;
