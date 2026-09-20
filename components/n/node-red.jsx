import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-eh3wbpz.css';
import '../../css/j/j-38zcbgj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f-eh3wbpz"/><path class="j-38zcbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:node-red"} {...others} />);
}

export default Component;
