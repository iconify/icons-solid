import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxqv83arr.css';
import '../../css/u/ub6441bsg.css';
import '../../css/g/gv5rgxxwr.css';
import '../../css/v/v46merb6a.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="sxqv83arr"/><path class="ub6441bsg"/><path class="gv5rgxxwr"/><path class="v46merb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:spain"} {...others} />);
}

export default Component;
