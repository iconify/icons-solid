import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc9l2mb-j.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="wc9l2mb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:glyphs-filled"} {...others} />);
}

export default Component;
