import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7812fb8q.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="r7812fb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:download-list"} {...others} />);
}

export default Component;
