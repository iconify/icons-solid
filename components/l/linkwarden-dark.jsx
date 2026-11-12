import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn9l6bbdm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yn9l6bbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linkwarden-dark"} {...others} />);
}

export default Component;
