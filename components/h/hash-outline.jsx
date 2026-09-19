import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_87rhb6e.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="t_87rhb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hash-outline"} {...others} />);
}

export default Component;
