import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk7d680ye.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="pk7d680ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-holding-heart-outline"} {...others} />);
}

export default Component;
