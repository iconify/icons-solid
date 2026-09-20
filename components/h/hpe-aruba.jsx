import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rypl5_97b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rypl5_97b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hpe-aruba"} {...others} />);
}

export default Component;
