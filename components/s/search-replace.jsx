import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfkpbtgle.css';

const viewBox = {"width":376,"height":400};
const content = `<path class="qfkpbtgle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:search-replace"} {...others} />);
}

export default Component;
