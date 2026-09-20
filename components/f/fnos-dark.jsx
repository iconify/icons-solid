import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvh4yw4zh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jvh4yw4zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fnos-dark"} {...others} />);
}

export default Component;
