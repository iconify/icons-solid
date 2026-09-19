import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bydfmbccd.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="bydfmbccd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:aligntopedge"} {...others} />);
}

export default Component;
