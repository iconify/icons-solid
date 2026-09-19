import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv_0qibyt.css';
import '../../css/y/yi-zn1bbs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv_0qibyt"/><path class="yi-zn1bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:icecream"} {...others} />);
}

export default Component;
