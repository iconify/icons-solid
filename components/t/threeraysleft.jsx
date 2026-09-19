import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm7o1er_c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dm7o1er_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:threeraysleft"} {...others} />);
}

export default Component;
