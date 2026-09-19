import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsize-wde.css';
import '../../css/n/nw8rr6bkb.css';
import '../../css/b/bl-vv4mlh.css';
import '../../css/m/mp_j2rb-x.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="wsize-wde"/><path class="nw8rr6bkb"/><path class="bl-vv4mlh"/><path class="mp_j2rb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:circledideographaccept"} {...others} />);
}

export default Component;
