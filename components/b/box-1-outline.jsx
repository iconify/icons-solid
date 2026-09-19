import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oryax0bnc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="oryax0bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-1-outline"} {...others} />);
}

export default Component;
