import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zers9_rqs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zers9_rqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heart-in-eaved-gabled-building"} {...others} />);
}

export default Component;
