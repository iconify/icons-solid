import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyyx4s3jh.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="qyyx4s3jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-warn-bold"} {...others} />);
}

export default Component;
