import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0a_jacfs.css';

const viewBox = {"width":434,"height":512};
const content = `<path clip-rule="evenodd" class="p0a_jacfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:lfe"} {...others} />);
}

export default Component;
