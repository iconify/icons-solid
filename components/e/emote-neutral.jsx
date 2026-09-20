import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0ks-cr2h.css';
import '../../css/b/bhg-vwbun.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="d0ks-cr2h"/><path class="bhg-vwbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:emote-neutral"} {...others} />);
}

export default Component;
