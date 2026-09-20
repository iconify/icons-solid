import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7m834b-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="w7m834b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:hand"} {...others} />);
}

export default Component;
