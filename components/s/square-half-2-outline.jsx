import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi7q1bdwu.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vi7q1bdwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:square-half-2-outline"} {...others} />);
}

export default Component;
