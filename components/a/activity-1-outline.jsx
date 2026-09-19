import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a33rtejtl.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="a33rtejtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:activity-1-outline"} {...others} />);
}

export default Component;
