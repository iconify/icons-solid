import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-7lnjbeu.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="c-7lnjbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:pause-circle-outline"} {...others} />);
}

export default Component;
