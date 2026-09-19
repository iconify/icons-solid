import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5fiz9wbv.css';
import '../../css/i/i2gtjkbwv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w5fiz9wbv"/><path class="i2gtjkbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shield-half"} {...others} />);
}

export default Component;
