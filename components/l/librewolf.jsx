import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkdzwwbtq.css';
import '../../css/r/rzcvymb5x.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nkdzwwbtq"/><path class="rzcvymb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librewolf"} {...others} />);
}

export default Component;
