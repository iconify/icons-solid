import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlv7vxu_o.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="rlv7vxu_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:quote-single-duo"} {...others} />);
}

export default Component;
