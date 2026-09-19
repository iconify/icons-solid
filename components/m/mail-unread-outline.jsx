import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug7viwfag.css';
import '../../css/a/atf7rkfzt.css';
import '../../css/s/sntxj5r0a.css';
import '../../css/b/bvllc8w-c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ug7viwfag"/><path class="atf7rkfzt"/><circle class="sntxj5r0a"/><path class="bvllc8w-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mail-unread-outline"} {...others} />);
}

export default Component;
