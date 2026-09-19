import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e658-774s.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="e658-774s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:roundswitch-on"} {...others} />);
}

export default Component;
