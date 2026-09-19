import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j50aadc2n.css';
import '../../css/z/z_4hbabey.css';
import '../../css/b/bahuvobth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j50aadc2n"/><path class="z_4hbabey"/><path class="bahuvobth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cjkunifiedideograph-g"} {...others} />);
}

export default Component;
