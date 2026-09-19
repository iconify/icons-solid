import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7fr20m4o.css';
import '../../css/g/g6shwtddl.css';
import '../../css/q/q8u0wn3hp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e7fr20m4o"/><path class="g6shwtddl"/><path class="q8u0wn3hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dk-1x1"} {...others} />);
}

export default Component;
