import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3xd-ebwy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3xd-ebwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chili3d-dark"} {...others} />);
}

export default Component;
