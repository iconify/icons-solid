import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_7fzobku.css';
import '../../css/g/gw9s8899s.css';
import '../../css/t/t616afbxn.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="l_7fzobku"/><circle class="gw9s8899s"/><circle class="t616afbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smlight-light"} {...others} />);
}

export default Component;
