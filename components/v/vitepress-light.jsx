import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv7g_mxtq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lv7g_mxtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vitepress-light"} {...others} />);
}

export default Component;
