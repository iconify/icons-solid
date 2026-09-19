import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-s8crb-y.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="x-s8crb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:directions-sign-1"} {...others} />);
}

export default Component;
