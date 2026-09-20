import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg9unybms.css';
import '../../css/f/fv0y09b3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vg9unybms"/><path class="fv0y09b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chili3d"} {...others} />);
}

export default Component;
