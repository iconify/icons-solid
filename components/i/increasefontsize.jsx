import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6mdaccda.css';
import '../../css/m/m79b16c6o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f6mdaccda"/><path class="m79b16c6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:increasefontsize"} {...others} />);
}

export default Component;
