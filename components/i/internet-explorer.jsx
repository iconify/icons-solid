import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyt0ni33n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zyt0ni33n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:internet-explorer"} {...others} />);
}

export default Component;
