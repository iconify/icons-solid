import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj0h6tbsi.css';
import '../../css/k/kvfqgdcvb.css';
import '../../css/l/lpwt15b-r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rj0h6tbsi"/><circle class="kvfqgdcvb"/><path class="lpwt15b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:person-remove-sharp"} {...others} />);
}

export default Component;
