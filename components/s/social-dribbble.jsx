import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lckvgaccq.css';
import '../../css/a/a_75vmbvz.css';
import '../../css/s/s53oxg--q.css';
import '../../css/o/o42qmce2l.css';
import '../../css/l/l7sg5nefu.css';
import '../../css/n/nmt0oxb2x.css';
import '../../css/i/ik439dzmg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lckvgaccq"/><path class="a_75vmbvz"/><path class="s53oxg--q"/><path class="o42qmce2l"/><path class="l7sg5nefu"/><path class="nmt0oxb2x"/><path class="ik439dzmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-dribbble"} {...others} />);
}

export default Component;
