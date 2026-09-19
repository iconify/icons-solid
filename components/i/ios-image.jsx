import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-98_hbbz.css';
import '../../css/z/zl44w455k.css';
import '../../css/i/ihr8kgbqh.css';
import '../../css/h/hm7iy3b-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-98_hbbz"/><path class="zl44w455k"/><path class="ihr8kgbqh"/><path class="hm7iy3b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-image"} {...others} />);
}

export default Component;
