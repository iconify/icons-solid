import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1bg4hbvb.css';
import '../../css/i/i5e6rm6wc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a1bg4hbvb"/><path class="i5e6rm6wc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:disc-sharp"} {...others} />);
}

export default Component;
