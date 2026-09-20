import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd1629y4b.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gd1629y4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-hanger-hanger-locker-check-coat-room-cloak"} {...others} />);
}

export default Component;
