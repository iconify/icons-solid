import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3dnrk_0v.css';
import '../../css/r/r3h-ltb-k.css';
import '../../css/t/t2or4horf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3dnrk_0v"/><path class="r3h-ltb-k"/><path class="t2or4horf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-bold-duotone"} {...others} />);
}

export default Component;
