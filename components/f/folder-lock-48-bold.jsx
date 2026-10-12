import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywyo2sv2k.css';
import '../../css/w/wub_f-bbi.css';
import '../../css/u/uir1vq-bm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ywyo2sv2k"/><path class="wub_f-bbi"/><path class="uir1vq-bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-lock-48-bold"} {...others} />);
}

export default Component;
