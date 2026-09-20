import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byrz3kh6s.css';
import '../../css/y/y2h-ot9zd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="byrz3kh6s"/><path class="y2h-ot9zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-tag-manager-light"} {...others} />);
}

export default Component;
