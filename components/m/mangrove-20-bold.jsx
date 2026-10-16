import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc-vefb6k.css';
import '../../css/y/yepxcdblb.css';
import '../../css/y/ytv9lwb5g.css';
import '../../css/k/kikr_kw4e.css';
import '../../css/f/f9kh3-b2w.css';
import '../../css/y/yt4k1acfc.css';
import '../../css/y/ywzi2_7ys.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sc-vefb6k"/><path class="yepxcdblb"/><path class="ytv9lwb5g"/><path class="kikr_kw4e"/><path class="f9kh3-b2w"/><path class="yt4k1acfc"/><path class="ywzi2_7ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mangrove-20-bold"} {...others} />);
}

export default Component;
