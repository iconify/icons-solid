import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am6f-cg6s.css';
import '../../css/h/hfov4zyhi.css';
import '../../css/m/miebbgx2k.css';
import '../../css/f/fcypl9bnz.css';
import '../../css/i/igqiqpbix.css';

const viewBox = {"width":14,"height":14};
const content = `<rect class="am6f-cg6s"/><path class="hfov4zyhi"/><path class="miebbgx2k"/><path class="fcypl9bnz"/><path class="igqiqpbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-database-server-2-server-network-internet"} {...others} />);
}

export default Component;
