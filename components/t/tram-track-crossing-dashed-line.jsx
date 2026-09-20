import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-xmnxb8z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k-xmnxb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tram-track-crossing-dashed-line"} {...others} />);
}

export default Component;
