import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b85wjpb7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b85wjpb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-arrow-dropdown-circle"} {...others} />);
}

export default Component;
