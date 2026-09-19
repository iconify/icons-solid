import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1cf7r2zc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="t1cf7r2zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:calendar-outline"} {...others} />);
}

export default Component;
