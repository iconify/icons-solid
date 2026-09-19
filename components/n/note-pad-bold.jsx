import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxdi6zbky.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="lxdi6zbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-pad-bold"} {...others} />);
}

export default Component;
