import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc3mhcb_h.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="dc3mhcb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:yoast"} {...others} />);
}

export default Component;
