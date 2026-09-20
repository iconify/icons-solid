import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7hgbdc0h.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="f7hgbdc0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:user-lock"} {...others} />);
}

export default Component;
