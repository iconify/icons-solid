import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxfd8bxcj.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="yxfd8bxcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis"} {...others} />);
}

export default Component;
