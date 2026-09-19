import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxmi4xbin.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="gxmi4xbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:h-1-outline"} {...others} />);
}

export default Component;
