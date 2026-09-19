import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtsijlbvl.css';
import '../../css/x/x67r1rb3u.css';
import '../../css/k/kf_wzi21l.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="jtsijlbvl"/><path clip-rule="evenodd" class="x67r1rb3u"/><path class="kf_wzi21l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-linkedin-outline"} {...others} />);
}

export default Component;
