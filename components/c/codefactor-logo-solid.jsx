import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijt4jib4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ijt4jib4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:codefactor-logo-solid"} {...others} />);
}

export default Component;
