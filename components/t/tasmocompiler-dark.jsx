import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt4l2gbmc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jt4l2gbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasmocompiler-dark"} {...others} />);
}

export default Component;
