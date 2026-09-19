import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmlbdlbfq.css';
import '../../css/k/kvfqgdcvb.css';
import '../../css/l/lpwt15b-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vmlbdlbfq"/><circle class="kvfqgdcvb"/><path class="lpwt15b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:person-add-sharp"} {...others} />);
}

export default Component;
