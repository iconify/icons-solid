import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdvc9woqc.css';
import '../../css/p/ptwpuid-h.css';
import '../../css/a/atnwqg8za.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdvc9woqc"/><path class="ptwpuid-h"/><path class="atnwqg8za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-teams-dark"} {...others} />);
}

export default Component;
