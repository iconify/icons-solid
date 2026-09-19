import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig9f87b2y.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ig9f87b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:accessible-outline"} {...others} />);
}

export default Component;
