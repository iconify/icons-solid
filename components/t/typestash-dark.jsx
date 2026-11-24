import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1b0gzbhk.css';
import '../../css/l/lva836zoc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s1b0gzbhk"/><path class="lva836zoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typestash-dark"} {...others} />);
}

export default Component;
