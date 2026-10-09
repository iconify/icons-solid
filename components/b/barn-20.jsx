import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf8931yxd.css';
import '../../css/o/ohmm4ymdc.css';
import '../../css/x/x4owwtbzm.css';
import '../../css/z/zc_uuwb9s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kf8931yxd"/><path class="ohmm4ymdc"/><path class="x4owwtbzm"/><path class="zc_uuwb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barn-20"} {...others} />);
}

export default Component;
