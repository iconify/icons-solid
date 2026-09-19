import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/earzy2rdl.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="earzy2rdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:crop-din"} {...others} />);
}

export default Component;
