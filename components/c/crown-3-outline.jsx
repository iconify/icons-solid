import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1r-0chkh.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="y1r-0chkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-3-outline"} {...others} />);
}

export default Component;
