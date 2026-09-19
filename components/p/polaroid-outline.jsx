import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8ds3ac-u.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="l8ds3ac-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:polaroid-outline"} {...others} />);
}

export default Component;
