import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7ig5bf8h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i7ig5bf8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-navigation-menu-2"} {...others} />);
}

export default Component;
