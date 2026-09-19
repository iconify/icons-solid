import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-twxbb6x.css';
import '../../css/z/zt62pibkv.css';
import '../../css/f/fb6cqib6n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-twxbb6x"/><rect class="zt62pibkv"/><path class="fb6cqib6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trash-bin-outline"} {...others} />);
}

export default Component;
