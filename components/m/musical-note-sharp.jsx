import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0-o8vb6n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d0-o8vb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:musical-note-sharp"} {...others} />);
}

export default Component;
