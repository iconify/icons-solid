import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a57li6b2p.css';
import '../../css/a/a_tlqyzpa.css';
import '../../css/m/m2tanfswk.css';
import '../../css/a/axn3j1_ix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a57li6b2p"/><path class="a_tlqyzpa"/><path class="m2tanfswk"/><path class="axn3j1_ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:closedmailboxraised"} {...others} />);
}

export default Component;
