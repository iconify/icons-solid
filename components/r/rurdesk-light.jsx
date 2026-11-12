import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwwaekbrn.css';
import '../../css/a/a-4ue5bby.css';
import '../../css/t/tm45hz_di.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pwwaekbrn"/><path class="a-4ue5bby"/><circle class="tm45hz_di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rurdesk-light"} {...others} />);
}

export default Component;
