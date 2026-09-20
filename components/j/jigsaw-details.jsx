import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5d93d0jn.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="j5d93d0jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:jigsaw-details"} {...others} />);
}

export default Component;
