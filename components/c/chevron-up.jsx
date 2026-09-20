import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wewv2-b6p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wewv2-b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:chevron-up"} {...others} />);
}

export default Component;
