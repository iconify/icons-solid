import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx5d-4rvd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sx5d-4rvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-navigation-menu-1"} {...others} />);
}

export default Component;
