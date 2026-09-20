import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po_1dfsdy.css';
import '../../css/i/i17ii8nyw.css';
import '../../css/y/y8w0wpbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="po_1dfsdy"/><path class="i17ii8nyw"/><path class="y8w0wpbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-youtube-circular"} {...others} />);
}

export default Component;
