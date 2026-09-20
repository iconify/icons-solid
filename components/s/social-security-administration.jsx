import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6hwvs4-a.css';
import '../../css/o/ot8j7rzge.css';
import '../../css/s/sqlj-pbbq.css';
import '../../css/k/k9uzu3g8b.css';
import '../../css/c/ciu5c_bvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6hwvs4-a"/><path clip-rule="evenodd" class="ot8j7rzge"/><path class="sqlj-pbbq"/><path clip-rule="evenodd" class="k9uzu3g8b"/><path class="ciu5c_bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:social-security-administration"} {...others} />);
}

export default Component;
