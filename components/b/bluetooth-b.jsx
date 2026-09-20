import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvfl5p4bi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vvfl5p4bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:bluetooth-b"} {...others} />);
}

export default Component;
