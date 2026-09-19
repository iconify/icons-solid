import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0v9gt2dh.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="o0v9gt2dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:activity-outline"} {...others} />);
}

export default Component;
