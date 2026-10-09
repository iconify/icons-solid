import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmh3e9bdx.css';
import '../../css/z/z_yq7-buc.css';
import '../../css/y/yg_0l029v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmh3e9bdx"/><path class="z_yq7-buc"/><path class="yg_0l029v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-20-bold"} {...others} />);
}

export default Component;
