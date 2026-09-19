import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxcnp6gvb.css';
import '../../css/i/izmrif76v.css';
import '../../css/v/v79wol1zy.css';
import '../../css/o/oofbtzbxx.css';
import '../../css/s/sf4-4ac8s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lxcnp6gvb"/><path class="izmrif76v"/><path class="v79wol1zy"/><path class="oofbtzbxx"/><path class="sf4-4ac8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monkeyface"} {...others} />);
}

export default Component;
