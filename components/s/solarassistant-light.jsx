import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd2317bpb.css';
import '../../css/j/j2_dkcu_s.css';
import '../../css/r/ri_kzvb7p.css';
import '../../css/b/bdr85wbvd.css';
import '../../css/j/jzaw16b-k.css';
import '../../css/v/vlblsvc5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rd2317bpb"/><path class="j2_dkcu_s"/><path class="ri_kzvb7p"/><path class="bdr85wbvd"/><path class="jzaw16b-k"/><path class="vlblsvc5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solarassistant-light"} {...others} />);
}

export default Component;
