import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnjp8ib7s.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="xnjp8ib7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hand-fist"} {...others} />);
}

export default Component;
