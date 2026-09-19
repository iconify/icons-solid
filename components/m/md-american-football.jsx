import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfbprr8-v.css';
import '../../css/r/rd41_2bru.css';
import '../../css/t/tllvccb_c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vfbprr8-v"/><path class="rd41_2bru"/><g><path class="tllvccb_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-american-football"} {...others} />);
}

export default Component;
