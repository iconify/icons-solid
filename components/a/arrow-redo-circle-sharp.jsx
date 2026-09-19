import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2b3vi6yu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2b3vi6yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-redo-circle-sharp"} {...others} />);
}

export default Component;
