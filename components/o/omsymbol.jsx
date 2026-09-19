import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuoip9b-q.css';
import '../../css/i/i2wte8b4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xuoip9b-q"/><path class="i2wte8b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:omsymbol"} {...others} />);
}

export default Component;
