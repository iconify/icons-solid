import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg1q8-kvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg1q8-kvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:umbrella-2-line"} {...others} />);
}

export default Component;
