import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/islpwrbax.css';
import '../../css/f/fg_9inbkk.css';
import '../../css/g/g1vushbzv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="islpwrbax"/><path class="fg_9inbkk"/><path class="g1vushbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mushroom"} {...others} />);
}

export default Component;
