import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr7_wabhq.css';
import '../../css/r/r3nawdb_c.css';
import '../../css/c/c-wx2xbdp.css';
import '../../css/e/ejz18pb3u.css';
import '../../css/r/ro6p7mb3o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tr7_wabhq"/><path class="r3nawdb_c"/><path class="c-wx2xbdp"/><path class="ejz18pb3u"/><path class="ro6p7mb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:autonomous-car-20"} {...others} />);
}

export default Component;
