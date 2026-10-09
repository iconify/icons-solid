import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx8zhcwih.css';
import '../../css/z/zcanx4ban.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wx8zhcwih"/><path class="zcanx4ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:uranium-20"} {...others} />);
}

export default Component;
