import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0daysu1p.css';
import '../../css/q/qnkrgpaud.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0daysu1p"/><path class="qnkrgpaud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trending-up-sharp"} {...others} />);
}

export default Component;
