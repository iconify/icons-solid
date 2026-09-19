import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5re3sbmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5re3sbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:wolf-pack-battalion"} {...others} />);
}

export default Component;
