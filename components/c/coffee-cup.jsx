import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3he0ryws.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m3he0ryws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:coffee-cup"} {...others} />);
}

export default Component;
