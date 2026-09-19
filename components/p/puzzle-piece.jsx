import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlfijw3hs.css';

const viewBox = {"width":448,"height":456};
const content = `<path class="zlfijw3hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:puzzle-piece"} {...others} />);
}

export default Component;
