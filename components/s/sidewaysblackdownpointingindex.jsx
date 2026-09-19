import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv3y_4b2h.css';
import '../../css/r/rhaxarb9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qv3y_4b2h"/><path class="rhaxarb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysblackdownpointingindex"} {...others} />);
}

export default Component;
