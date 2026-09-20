import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro7masbhg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ro7masbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:airport-security-remix"} {...others} />);
}

export default Component;
