import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jztg1xb4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jztg1xb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chatbubble-ellipses-sharp"} {...others} />);
}

export default Component;
