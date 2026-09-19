import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0akcpbqv.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="v0akcpbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:magnet-outline"} {...others} />);
}

export default Component;
