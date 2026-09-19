import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7qde211y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j7qde211y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:filter-circle-sharp"} {...others} />);
}

export default Component;
