import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifwegobae.css';
import '../../css/b/bi8laefud.css';
import '../../css/y/yj-_c0bey.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ifwegobae"/><path class="bi8laefud"/><path class="yj-_c0bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raygun-monitoring"} {...others} />);
}

export default Component;
