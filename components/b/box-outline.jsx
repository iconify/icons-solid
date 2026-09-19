import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2_h6rb6e.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="o2_h6rb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-outline"} {...others} />);
}

export default Component;
