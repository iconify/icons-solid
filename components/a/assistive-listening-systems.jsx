import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhq96o62y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vhq96o62y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:assistive-listening-systems"} {...others} />);
}

export default Component;
