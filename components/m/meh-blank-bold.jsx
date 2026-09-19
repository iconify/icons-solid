import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j02izstjw.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="j02izstjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:meh-blank-bold"} {...others} />);
}

export default Component;
