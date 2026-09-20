import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8u7ribjb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z8u7ribjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-people-standing-in-rectangle-outline-under-arrow-up-beside-arrow-down"} {...others} />);
}

export default Component;
