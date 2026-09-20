import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swfgeb0ne.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="swfgeb0ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:bluetooth"} {...others} />);
}

export default Component;
