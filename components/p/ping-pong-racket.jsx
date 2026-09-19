import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlenh5bfj.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="zlenh5bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:ping-pong-racket"} {...others} />);
}

export default Component;
