import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn8salbwc.css';
import '../../css/q/qybors25i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hn8salbwc"/><path class="qybors25i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:toodoom-light"} {...others} />);
}

export default Component;
