import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mic8vxb1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mic8vxb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fastmail-dark"} {...others} />);
}

export default Component;
