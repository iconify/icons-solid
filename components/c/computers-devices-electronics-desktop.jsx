import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3e1967if.css';
import '../../css/f/f9s06tb4u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c3e1967if"/><path class="f9s06tb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-desktop"} {...others} />);
}

export default Component;
