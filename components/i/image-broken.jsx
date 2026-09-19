import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwm-t2b6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pwm-t2b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:image-broken"} {...others} />);
}

export default Component;
