import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqccm1buv.css';
import '../../css/h/hw4m2zm2k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qqccm1buv"/><path class="hw4m2zm2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:fridge"} {...others} />);
}

export default Component;
