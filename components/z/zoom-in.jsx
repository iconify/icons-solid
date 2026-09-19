import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5r5sj_tl.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="b5r5sj_tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:zoom-in"} {...others} />);
}

export default Component;
