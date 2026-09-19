import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqgqhc_5n.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="qqgqhc_5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunny-mostly-bold"} {...others} />);
}

export default Component;
