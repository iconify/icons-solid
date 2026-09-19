import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4_ab59fp.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="b4_ab59fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:unlink-duo"} {...others} />);
}

export default Component;
