import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyz7sxb6l.css';
import '../../css/z/zhwfo4bgb.css';
import '../../css/n/ngnbw93bi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yyz7sxb6l"/><path class="zhwfo4bgb"/><path class="ngnbw93bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-on-stroke-20"} {...others} />);
}

export default Component;
