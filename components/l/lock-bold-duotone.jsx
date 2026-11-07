import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3dnrk_0v.css';
import '../../css/y/ywc-2eb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3dnrk_0v"/><path class="ywc-2eb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-bold-duotone"} {...others} />);
}

export default Component;
