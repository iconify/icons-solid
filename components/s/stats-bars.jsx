import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd9y6e3na.css';
import '../../css/p/pvyz65bxh.css';
import '../../css/t/tvasz164u.css';
import '../../css/g/g23x1rbog.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zd9y6e3na"/><path class="pvyz65bxh"/><path class="tvasz164u"/><path class="g23x1rbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:stats-bars"} {...others} />);
}

export default Component;
