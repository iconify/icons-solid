import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh4vbpr-i.css';
import '../../css/d/dq961ejjd.css';
import '../../css/t/tdesojbkc.css';
import '../../css/n/ngtmo646m.css';
import '../../css/p/phh1iozuu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mh4vbpr-i"/><path class="dq961ejjd"/><path class="tdesojbkc"/><path class="ngtmo646m"/><path class="phh1iozuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-pump-20"} {...others} />);
}

export default Component;
