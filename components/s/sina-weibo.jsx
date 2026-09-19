import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr7325j1p.css';
import '../../css/v/vix1e0hxe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wr7325j1p"/><path class="vix1e0hxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:sina-weibo"} {...others} />);
}

export default Component;
